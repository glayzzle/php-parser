/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * <ebnf>
   * namespace ::= T_NAMESPACE namespace_name? '{'
   *    top_statements
   * '}'
   * | T_NAMESPACE namespace_name ';' top_statements
   * </ebnf>
   */
  read_namespace: function() {
    this.expect(this.tok.T_NAMESPACE).next();
    var result = this.node('namespace');
    if (this.token == '{') {
      return result([''], this.read_code_block(true));
    } else {
      // @fixme should expect {, T_STRING even if not NS_SEP
      if(this.token === this.tok.T_NS_SEPARATOR)
          this.error(['{', this.tok.T_STRING]);
      var name = this.read_namespace_name();
      if (this.token == ';') {
        var body = this.nextWithComments().read_top_statements();
        this.expect(this.EOF);
        return result(name, body);
      } else if (this.token == '{') {
        return result(name, this.read_code_block(true));
      } else {
        this.error(['{', ';']);
      }
    }
  }
  /**
   * reading a namespace name
   * <ebnf>
   *  namespace_name ::= T_NS_SEPARATOR? (T_STRING T_NS_SEPARATOR)* T_STRING
   * </ebnf>
   */
  ,read_namespace_name: function() {
    return this.read_list(this.tok.T_STRING, this.tok.T_NS_SEPARATOR, true);
  }
  /**
   * <ebnf>
   * use_statements ::=
   *      use_statements ',' use_statement
   *      | use_statement
   * </ebnf>
   */
  ,read_use_statements: function() {
      var result = [];
      while(this.token !== this.EOF) {
          this.expect(this.tok.T_USE).next();
          this.read_list(this.read_use_statement_mixed, ',').forEach(function(item) {
            if (typeof item[0] === 'string') {
              result.push(item);
            } else {
              item.forEach(function(child) {
                result.push(child);
              });
            }
          });
          if(this.token !== this.tok.T_USE) break;
      }
      return result;
  }
  /**
   * <ebnf>
   *  inline_use_declaration ::= ...
   * </ebnf>
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L375
   */
  ,read_inline_use_declaration: function(prefix) {
    var result = [];
    while(this.token !== this.EOF) {
      var node = this.node('use');
      var ns = this.read_use_statement(prefix[3] !== false);
      if(this.token === this.tok.T_AS) {
        this.next().expect(this.tok.T_STRING);
        ns[1] = this.text();
        this.next();
      }
      ns[0] = prefix[0].concat(ns[0]);
      if (prefix[2] !== false) {
        ns[2] = prefix[2];
      }
      result.push(node.apply(this, ns));
      if(this.token !== ',') {
        break;
      } else {
        this.next();
      }
    }
    return result;
  }
  /**
   * <ebnf>
   *   use_statement_mixed ::=
   *       use_statement  (T_AS T_STRING | '{' read_inline_use_declaration '}' )
   *       (',' read_use_statement)*
   * </ebnf>
   */
  ,read_use_statement_mixed: function() {
    var result = this.node('use');
    var use = this.read_use_statement();
    if(this.token === this.tok.T_AS) {
      this.next().expect(this.tok.T_STRING);
      use[1] = this.text();
      this.next();
    } else if (this.token === '{') {
      use = this.next().read_inline_use_declaration(use);
      this.expect('}').next();
      return use;
    }
    return result.apply(this, use);
  }
  /**
   * <ebnf>
   * use_statement ::= (
   *  (T_FUNCTION | T_CONST)? namespace_name
   *  )
   * </ebnf>
   */
  ,read_use_statement: function(ignoreType) {
      var type = false;
      if(
        !ignoreType && (this.token === this.tok.T_FUNCTION || this.token === this.tok.T_CONST)
      ) {
        type = this.token === this.tok.T_FUNCTION ? 'function' : 'constant';
        this.next();
      }
      var name = this.read_namespace_name();
      return [name, name[name.length - 1], type];
  }
};
