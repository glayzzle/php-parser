/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * reading a class
   * <ebnf>
   * class ::= class_scope? T_CLASS T_STRING (T_EXTENDS NAMESPACE_NAME)? (T_IMPLEMENTS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' CLASS_BODY '}'
   * </ebnf>
   */
  read_class: function(flag) {
    var result = this.node('class');
    this.expect(this.tok.T_CLASS)
      .next()
      .expect(this.tok.T_STRING)
    ;
    var propName = this.text()
      , propExtends = false
      , propImplements = false
    ;
    if (this.next().token == this.tok.T_EXTENDS) {
      propExtends = this.next().read_namespace_name();
    }
    if (this.token == this.tok.T_IMPLEMENTS) {
      propImplements = this.next().read_list(
        this.read_namespace_name,
        ','
      );
    }
    return result(
      propName
      ,flag
      ,propExtends
      ,propImplements
      ,this.expect('{').nextWithComments().read_class_body()
    );
  }
  /**
   * Read the class visibility
   * <ebnf>
   *   class_scope ::= (T_FINAL | T_ABSTRACT)?
   * </ebnf>
   */
  ,read_class_scope: function() {
    var result = this.token;
    if (result == this.tok.T_FINAL || result == this.tok.T_ABSTRACT) {
      this.next();
      return result;
    }
    return 0;
  }
  /**
   * Reads a class body
   * <ebnf>
   *   class_body ::= (member_flags? (T_VAR | T_STRING | T_FUNCTION))*
   * </ebnf>
   */
  ,read_class_body: function() {
    var result = {
      'constants': []
      ,'properties': []
      ,'methods': []
      ,'use': {
        // list of traits
        traits: [],
        // list of alias
        adaptations: []
      }
    }, startAt = null, node = null, comment = false;



    while(this.token !== this.EOF && this.token !== '}') {

      if (this.token === this.tok.T_COMMENT) {
        comment = this.read_comment();
        continue;
      }

      if (this.token === this.tok.T_DOC_COMMENT) {
        comment = this.read_doc_comment();
        continue;
      }

      // check T_USE trait
      if (this.token === this.tok.T_USE) {
        comment = false; // flush comments
        this.next().read_trait_use_statement(result['use']);
        continue;
      }

      // check constant
      if (this.token === this.tok.T_CONST) {
        node = this.node();
        var constants = this.read_constant_list();
        this.expect(';').nextWithComments();
        if (comment) {
          (this.locations ? comment[3] : comment).push(constants);
          constants = comment;
          comment = false;
        }
        constants = node.apply(this, constants);
        result.constants.push(constants);
        continue;
      }

      // prepare here position (to avoid bad position on locations)
      if (this.locations) {
        startAt = [
          this.lexer.yylloc.first_line,
          this.lexer.yylloc.first_column,
          this.length - this.lexer._input.length - this.lexer.yytext.length
        ];
      }
      // read member flags
      var flags = this.read_member_flags(false);

      // jump over T_VAR then land on T_VARIABLE
      if (this.token === this.tok.T_VAR) {
        this.next().expect(this.tok.T_VARIABLE);
      }

      // reads a variable
      if (this.token === this.tok.T_VARIABLE) {
        var variables = this.read_variable_list(flags);
        this.expect(';').nextWithComments();
        for(var i = 0; i < variables.length; i++) {
          var variable = variables[i];
          (this.locations ? variable[3] : variable).push(flags);
          if (comment) {
            var buffer = comment.slice(0);
            (this.locations ? buffer[3] : buffer).push(variable);
            variable = buffer;
          }
          result.properties.push(variable);
        }
        comment = false;
      } else if (this.token === this.tok.T_FUNCTION) {
        // reads a function
        var method = this.read_function(false, flags[2] === 1);
        if (this.locations) {
          method[1] = startAt;
          method[3].push(flags);
        } else {
          method.push(flags);
        }
        if (comment) {
          (this.locations ? comment[3] : comment).push(method);
          method = comment;
          comment = false;
        }
        result.methods.push(method);
      } else {
        // raise an error
        this.error([
          this.tok.T_CONST,
          this.tok.T_VARIABLE,
          this.tok.T_FUNCTION
        ]);
      }
    }
    this.expect('}').nextWithComments();
    return result;
  }
  /**
   * Reads variable list
   * <ebnf>
   *  variable_list ::= (variable_declaration ',')* variable_declaration
   * </ebnf>
   */
  ,read_variable_list: function() {
    return this.read_list(
      this.read_variable_declaration,
      ','
    );
  }
  /**
   * Reads a variable declaration
   * <ebnf>
   *  variable_declaration ::= T_VARIABLE '=' scalar
   * </ebnf>
   */
  ,read_variable_declaration: function() {
    var varName = this.node(this.text());
    this.expect(this.tok.T_VARIABLE).next();
    if (this.token === ';' || this.token === ',') {
      return varName(null);
    } else if(this.token === '=') {
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L815
      return varName(this.next().read_expr());
    } else {
      this.expect([',', ';', '=']);
      return varName(null);
    }
  }
  /**
   * Reads constant list
   * <ebnf>
   *  constant_list ::= T_CONST (constant_declaration ',')* constant_declaration
   * </ebnf>
   */
  ,read_constant_list: function() {
    return this.expect(this.tok.T_CONST)
      .next()
      .read_list(
        this.read_constant_declaration, ','
      )
    ;
  }
  /**
   * Reads a constant declaration
   * <ebnf>
   *  constant_declaration ::= T_STRING '=' expr
   * </ebnf>
   */
  ,read_constant_declaration: function() {
    var name = this.node(this.text());
    var value = this.expect(this.tok.T_STRING)
      .next()
      .expect('=')
      .next()
      .read_expr()
    ;
    return name(value);
  }
  /**
   * Read member flags
   * @return array
   *  1st index : 0 => public, 1 => protected, 2 => private
   *  2nd index : 0 => instance member, 1 => static member
   *  3rd index : 0 => normal, 1 => abstract member, 2 => final member
   */
  ,read_member_flags: function(asInterface) {
    var result = [-1, -1, -1];
    if (this.is('T_MEMBER_FLAGS')) {
      var idx = 0, val = 0;
      do {

        switch(this.token) {
          case this.tok.T_PUBLIC:     idx = 0; val = 0; break;
          case this.tok.T_PROTECTED:  idx = 0; val = 1; break;
          case this.tok.T_PRIVATE:    idx = 0; val = 2; break;
          case this.tok.T_STATIC:     idx = 1; val = 1; break;
          case this.tok.T_ABSTRACT:   idx = 2; val = 1; break;
          case this.tok.T_FINAL:      idx = 2; val = 2; break;
        }
        if (asInterface) {
          if (idx == 0 && val == 2) {
            this.expect([this.tok.T_PUBLIC, this.tok.T_PROTECTED]);
          } else if (idx == 2 && val == 1) {
            this.error();
          }
        }
        if (result[idx] != -1) this.error();
        result[idx] = val;
      } while(this.next().is('T_MEMBER_FLAGS'));
    }

    if (result[0] == -1) result[0] = 0;
    if (result[1] == -1) result[1] = 0;
    if (result[2] == -1) result[2] = 0;
    return result;
  }
  /**
   * reading an interface
   * <ebnf>
   * interface ::= class_scope? T_INTERFACE T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' INTERFACE_BODY '}'
   * </ebnf>
   */
  ,read_interface: function(flag) {
    var result = this.node('interface');
    var name = this.expect(this.tok.T_INTERFACE)
      .next()
      .expect(this.tok.T_STRING)
      .text()
    ;
    var propExtends = false;
    if (this.next().token == this.tok.T_EXTENDS) {
      propExtends =  this.next().read_list(
        this.read_namespace_name,
        ','
      );
    }
    return result(
      name
      , flag
      , propExtends
      , this.expect('{').next().read_interface_body()
    );
  }
  /**
   * Reads an interface body
   * <ebnf>
   *   interface_body ::= (member_flags? (T_CONST | T_FUNCTION))*
   * </ebnf>
   */
  ,read_interface_body: function() {
    var result = {
      'constants': []
      ,'methods': []
    }, startAt = null;
    while(this.token !== this.EOF && this.token !== '}') {
      // check constant
      if (this.token == this.tok.T_CONST) {
        var node = this.node();
        var constants = this.read_constant_list();
        this.expect(';').next();
        constants = node.apply(this, constants);
        result.constants.push(constants);
        continue;
      }

      // prepare here position (to avoid bad position on locations)
      if (this.locations) {
        startAt = [
          this.lexer.yylloc.first_line,
          this.lexer.yylloc.first_column,
          this.length - this.lexer._input.length - this.lexer.yytext.length
        ];
      }

      // read member flags
      var flags = this.read_member_flags(true);

      // reads a function
      if (this.token === this.tok.T_FUNCTION) {
        // reads a function
        var method = this.read_function_declaration().concat(
          [flags]
        );
        if (this.locations) {
          method[1] = startAt;
        }
        result.methods.push(method);
        this.expect(';').next();
      } else {
        // raise an error
        this.error([
          this.tok.T_CONST,
          this.tok.T_FUNCTION
        ]);
      }
    }
    this.expect('}').next();
    return result;
  }
  /**
   * reading a trait
   * <ebnf>
   * trait ::= T_TRAIT T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' FUNCTION* '}'
   * </ebnf>
   */
  ,read_trait: function(flag) {
    var result = this.node('trait');
    this.expect(this.tok.T_TRAIT)
      .next()
      .expect(this.tok.T_STRING)
    ;
    var propName = this.text(),
      propExtends = false,
      propImplements = false;
    if (this.next().token == this.tok.T_EXTENDS) {
      propExtends = this.next().read_namespace_name();
    }
    if (this.token == this.tok.T_IMPLEMENTS) {
      propImplements = this.next().read_list(
        this.read_namespace_name,
        ','
      );
    }
    return result(
      propName,
      propExtends,
      propImplements,
      this.expect('{').next().read_class_body()
    );
  }
  /**
   * reading a use statement
   * <ebnf>
   * trait_use_statement ::= namespace_name (',' namespace_name)* ('{' trait_use_alias '}')?
   * </ebnf>
   */
  ,read_trait_use_statement: function(result) {
    result.traits.push(this.read_namespace_name());
    while(this.token === ',') {
      result.traits.push(
        this.next().read_namespace_name()
      );
    }
    if (this.token === '{') {
      while(this.next()) {
        if (this.token === '}') break;
        result.adaptations.push(this.read_trait_use_alias());
        this.expect(';');
      }
      this.expect('}').next();
    } else {
      this.expect(';').next();
    }
  }
  /**
   * Reading trait alias
   * <ebnf>
   * trait_use_alias ::= namespace_name ( T_DOUBLE_COLON T_STRING )? (T_INSTEADOF namespace_name) | (T_AS member_flags? T_STRING)
   * </ebnf>
   */
  ,read_trait_use_alias: function() {
    var result = {
      origin: this.read_namespace_name(),
      act: false,
      target: false
    };
    if (this.token === this.tok.T_DOUBLE_COLON) {
      result.origin = [
        result.origin,
        this.next().expect(this.tok.T_STRING).text()
      ];
      this.next();
    }

    if (this.token === this.tok.T_INSTEADOF) {
      result.act = 'instead';
      result.target = this.next().read_namespace_name();
    } else if (this.token === this.tok.T_AS) {
      result.act = 'as';
      result.flags = this.next().read_member_flags();
      result.target = this.expect(this.tok.T_STRING).text();
      this.next();
    } else {
      this.expect([
        this.tok.T_AS,
        this.tok.T_INSTEADOF
      ]);
    }
    return result;
  }
};
