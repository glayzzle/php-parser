/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * reading a class
   * ```ebnf
   * class ::= class_scope? T_CLASS T_STRING (T_EXTENDS NAMESPACE_NAME)? (T_IMPLEMENTS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' CLASS_BODY '}'
   * ```
   */
  read_class: function(flag) {
    var result = this.node('class');
    this.expect(this.tok.T_CLASS)
      .next()
      .expect(this.tok.T_STRING)
    ;
    var propName = this.text()
      , propExtends = null
      , propImplements = []
      , body
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
    body = this.expect('{').nextWithComments().read_class_body();
    return result(
      propName
      ,propExtends
      ,propImplements
      ,body
      ,flag
    );
  }
  /**
   * Read the class visibility
   * ```ebnf
   *   class_scope ::= (T_FINAL | T_ABSTRACT)?
   * ```
   */
  ,read_class_scope: function() {
    var result = this.token;
    if (result == this.tok.T_FINAL) {
      this.next();
      return -1;
    } else if (result == this.tok.T_ABSTRACT) {
      this.next();
      return 1;
    }
    return 0;
  }
  /**
   * Reads a class body
   * ```ebnf
   *   class_body ::= (member_flags? (T_VAR | T_STRING | T_FUNCTION))*
   * ```
   */
  ,read_class_body: function() {
    var result = [];

    while(this.token !== this.EOF && this.token !== '}') {

      if (this.token === this.tok.T_COMMENT) {
        result.push(this.read_comment());
        continue;
      }

      if (this.token === this.tok.T_DOC_COMMENT) {
        result.push(this.read_doc_comment());
        continue;
      }

      // check T_USE trait
      if (this.token === this.tok.T_USE) {
        result = result.concat(
          this.next().read_trait_use_statement()
        );
        continue;
      }

      // read member flags
      var flags = this.read_member_flags(false);

      // check constant
      if (this.token === this.tok.T_CONST) {
        var constants = this.read_constant_list(flags);
        this.expect(';').nextWithComments();
        result = result.concat(constants);
        continue;
      }

      // jump over T_VAR then land on T_VARIABLE
      if (this.token === this.tok.T_VAR) {
        this.next().expect(this.tok.T_VARIABLE);
        flags[0] = flags[1] = 0; // public & non static var
      }

      if (this.token === this.tok.T_VARIABLE) {

        // reads a variable
        var variables = this.read_variable_list(flags);
        this.expect(';').nextWithComments();
        result = result.concat(variables);

      } else if (this.token === this.tok.T_FUNCTION) {

        // reads a function
        result.push(this.read_function(false, flags));

      } else {

        // raise an error
        this.error([
          this.tok.T_CONST,
          this.tok.T_VARIABLE,
          this.tok.T_FUNCTION
        ]);
        // ignore token
        this.next();

      }
    }
    this.expect('}').nextWithComments();
    return result;
  }
  /**
   * Reads variable list
   * ```ebnf
   *  variable_list ::= (variable_declaration ',')* variable_declaration
   * ```
   */
  ,read_variable_list: function(flags) {
    return this.read_list(
      /**
       * Reads a variable declaration
       *
       * ```ebnf
       *  variable_declaration ::= T_VARIABLE '=' scalar
       * ```
       */
      function read_variable_declaration() {
        var result = this.node('property');
        var name = this.expect(this.tok.T_VARIABLE).text();
        this.next();
        if (this.token === ';' || this.token === ',') {
          return result(name, null, flags);
        } else if(this.token === '=') {
          // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L815
          return result(name, this.next().read_expr(), flags);
        } else {
          this.expect([',', ';', '=']);
          return result(name, null, flags);
        }
      }, ','
    );
  }
  /**
   * Reads constant list
   * ```ebnf
   *  constant_list ::= T_CONST (constant_declaration ',')* constant_declaration
   * ```
   */
  ,read_constant_list: function(flags) {
    return this.expect(this.tok.T_CONST)
      .next()
      .read_list(
        /**
         * Reads a constant declaration
         *
         * ```ebnf
         *  constant_declaration ::= T_STRING '=' expr
         * ```
         * @return {Constant} [:link:](AST.md#constant)
         */
        function read_constant_declaration() {
          var result = this.node('classconstant');
          var name = this.expect(this.tok.T_STRING).text();
          var value =  this.next().expect('=').next().read_expr();
          return result(name, value, flags);
        }, ','
      )
    ;
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
            // an interface can't be private
            this.expect([this.tok.T_PUBLIC, this.tok.T_PROTECTED]);
            val = -1;
          } else if (idx == 2 && val == 1) {
            // an interface cant be abstract
            this.error();
            val = -1;
          }
        }
        if (result[idx] !== -1) {
          // already defined flag
          this.error();
        } else if (val !== -1) {
          result[idx] = val;
        }
      } while(this.next().is('T_MEMBER_FLAGS'));
    }

    if (result[0] == -1) result[0] = 0;
    if (result[1] == -1) result[1] = 0;
    if (result[2] == -1) result[2] = 0;
    return result;
  }
  /**
   * reading an interface
   * ```ebnf
   * interface ::= class_scope? T_INTERFACE T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' INTERFACE_BODY '}'
   * ```
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
   * ```ebnf
   *   interface_body ::= (member_flags? (T_CONST | T_FUNCTION))*
   * ```
   */
  ,read_interface_body: function() {
    var result = [];

    while(this.token !== this.EOF && this.token !== '}') {

      if (this.token === this.tok.T_COMMENT) {
        comment = this.read_comment();
        continue;
      }

      if (this.token === this.tok.T_DOC_COMMENT) {
        comment = this.read_doc_comment();
        continue;
      }

      // read member flags
      var flags = this.read_member_flags(true);

      // check constant
      if (this.token == this.tok.T_CONST) {
        var constants = this.read_constant_list(flags);
        this.expect(';').nextWithComments();
        result = result.concat(constants);
      }

      // reads a function
      else if (this.token === this.tok.T_FUNCTION) {
        var method = this.read_function_declaration(2);
        (this.locations ? method[3] : method).push(flags);
        result.push(method);
        this.expect(';').nextWithComments();
      } else {
        // raise an error
        result.push(
          this.error([
            this.tok.T_CONST,
            this.tok.T_FUNCTION
          ])
        );
        this.next();
      }
    }
    this.expect('}').next();
    return result;
  }
  /**
   * reading a trait
   * ```ebnf
   * trait ::= T_TRAIT T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' FUNCTION* '}'
   * ```
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
   * ```ebnf
   * trait_use_statement ::= namespace_name (',' namespace_name)* ('{' trait_use_alias '}')?
   * ```
   */
  ,read_trait_use_statement: function() {
    // defines use statements
    var node = this.node('use');
    var name = this.read_namespace_name();
    var result = [node(name)];
    while(this.token === ',') {
      node = this.node('use');
      name = this.next().read_namespace_name();
      result.push(node(name));
    }
    if (this.token === '{') {
      // defines alias statements
      while(this.next()) {
        if (this.token === '}') break;
        result.push(this.read_trait_use_alias());
        this.expect(';');
      }
      this.expect('}').nextWithComments();
    } else {
      this.expect(';').nextWithComments();
    }
    return result;
  }
  /**
   * Reading trait alias
   * ```ebnf
   * trait_use_alias ::= namespace_name ( T_DOUBLE_COLON T_STRING )? (T_INSTEADOF namespace_name) | (T_AS member_flags? T_STRING)
   * ```
   */
  ,read_trait_use_alias: function() {
    var node = this.node('alias');
    var origin = this.read_namespace_name();
    var act = false;
    var target = false;
    var flags = false;

    if (this.token === this.tok.T_DOUBLE_COLON) {
      origin = [
        'static',
        'get',
        origin,
        this.next().expect(this.tok.T_STRING).text()
      ];
      this.next();
    }

    if (this.token === this.tok.T_INSTEADOF) {
      act = 'insteadof';
      target = this.next().read_namespace_name();
    } else if (this.token === this.tok.T_AS) {
      act = 'as';
      if (this.next().is('T_MEMBER_FLAGS')) {
        flags = this.read_member_flags();
      }
      if (this.token === this.tok.T_STRING) {
        target = this.text();
        this.next();
      } else if (flags === false) {
        // no visibility flags and no name => too bad
        this.expect(this.tok.T_STRING);
      }
    } else {
      this.expect([
        this.tok.T_AS,
        this.tok.T_INSTEADOF
      ]);
    }
    return node(origin, act, target, flags);
  }
};
