/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(lexer, tokens) {
  var keywords = {
    "__class__": tokens.T_CLASS_C,
    "__trait__": tokens.T_TRAIT_C,
    "__function__": tokens.T_FUNC_C,
    "__method__": tokens.T_METHOD_C,
    "__line__": tokens.T_LINE,
    "__file__": tokens.T_FILE,
    "__dir__": tokens.T_DIR,
    "__namespace__": tokens.T_NS_C,
    'exit': tokens.T_EXIT,
    'die': tokens.T_EXIT,
    'function': tokens.T_FUNCTION,
    "const": tokens.T_CONST,
    "return": tokens.T_RETURN,
    "try": tokens.T_TRY,
    "catch": tokens.T_CATCH,
    "finally": tokens.T_FINALLY,
    "throw": tokens.T_THROW,
    "if": tokens.T_IF,
    "elseif": tokens.T_ELSEIF,
    "endif": tokens.T_ENDIF,
    "else": tokens.T_ELSE,
    "while": tokens.T_WHILE,
    "endwhile": tokens.T_ENDWHILE,
    "do": tokens.T_DO,
    "for": tokens.T_FOR,
    "endfor": tokens.T_ENDFOR,
    "foreach": tokens.T_FOREACH,
    "endforeach": tokens.T_ENDFOREACH,
    "declare": tokens.T_DECLARE,
    "enddeclare": tokens.T_ENDDECLARE,
    "instanceof": tokens.T_INSTANCEOF,
    "as": tokens.T_AS,
    "switch": tokens.T_SWITCH,
    "endswitch": tokens.T_ENDSWITCH,
    "case": tokens.T_CASE,
    "default": tokens.T_DEFAULT,
    "break": tokens.T_BREAK,
    "continue": tokens.T_CONTINUE,
    "goto": tokens.T_GOTO,
    "echo": tokens.T_ECHO,
    "print": tokens.T_PRINT,
    "class": tokens.T_CLASS,
    "interface": tokens.T_INTERFACE,
    "trait": tokens.T_TRAIT,
    "extends": tokens.T_EXTENDS,
    "implements": tokens.T_IMPLEMENTS,
    "new": tokens.T_NEW,
    "clone": tokens.T_CLONE,
    "var": tokens.T_VAR,
    "eval": tokens.T_EVAL,
    "include": tokens.T_INCLUDE,
    "include_once": tokens.T_INCLUDE_ONCE,
    "require": tokens.T_REQUIRE,
    "require_once": tokens.T_REQUIRE_ONCE,
    "namespace": tokens.T_NAMESPACE,
    "use": tokens.T_USE,
    "insteadof": tokens.T_INSTEADOF,
    "global": tokens.T_GLOBAL,
    "isset": tokens.T_ISSET,
    "empty": tokens.T_EMPTY,
    "__halt_compiler": tokens.T_HALT_COMPILER,
    "static": tokens.T_STATIC,
    "abstract": tokens.T_ABSTRACT,
    "final": tokens.T_FINAL,
    "private": tokens.T_PRIVATE,
    "protected": tokens.T_PROTECTED,
    "public": tokens.T_PUBLIC,
    "unset": tokens.T_UNSET,
    "list": tokens.T_LIST,
    "array": tokens.T_ARRAY,
    "callable": tokens.T_CALLABLE,
    "or": tokens.T_LOGICAL_OR,
    "and": tokens.T_LOGICAL_AND,
    "xor": tokens.T_LOGICAL_XOR
  };
  
  var castKeywords = {
    'int': tokens.T_INT_CAST,
    'integer': tokens.T_INT_CAST,
    "real": tokens.T_DOUBLE_CAST,
    "double": tokens.T_DOUBLE_CAST,
    "float": tokens.T_DOUBLE_CAST,
    "string": tokens.T_STRING_CAST,
    "binary": tokens.T_STRING_CAST,
    "array": tokens.T_ARRAY_CAST,
    "object": tokens.T_OBJECT_CAST,
    "bool": tokens.T_BOOL_CAST,
    "boolean": tokens.T_BOOL_CAST,
    "unset": tokens.T_UNSET_CAST
  };
  
  
  
  return {
    T_STRING: function() {
      var token = this.yytext.toLowerCase();
      var id = keywords[token];
      if (!id) {
        if (token === 'yield') {
          if (this.tryMatch(' from')) {
            this.consume(5);
            id = tokens.T_YIELD_FROM;
          } else {
            id = tokens.T_YIELD;
          }
        } else {
          id = tokens.T_STRING;
        }
      }
      return id;
    },
    // reads a custom token
    consume_TOKEN: function() {
      var ch = this._input[this.offset - 1];
      var fn = this.tokenTerminals[ch];
      if (fn) {
        return fn.apply(this, []);
      } else {
        return this.yytext;
      }
    },
    // list of special char tokens
    tokenTerminals: {
      '$': function() {
        this.offset++;
        if (this.is_LABEL_START()) {
          this.offset--;
          this.consume_LABEL();
          return tokens.T_VARIABLE;
        } else {
          this.offset--;
          return '$';
        }
      },
      '-': function() {
        var nchar = this._input[this.offset];
        if (nchar === '>') {
          this.begin('ST_LOOKING_FOR_PROPERTY').input();
          return tokens.T_OBJECT_OPERATOR;
        } else if (nchar === '-') {
          this.input();
          return tokens.T_DEC;
        } else if (nchar === '=') {
          this.input();
          return tokens.T_MINUS_EQUAL;
        }
        return '-';
      },
      '\\': function() {
        return tokens.T_NS_SEPARATOR;
      },
      '/': function() {
        if (this._input[this.offset] === '=') {
          this.input();
          return tokens.T_DIV_EQUAL;
        }
        return '/';
      },
      ':': function() {
        if (this._input[this.offset] === ':') {
          this.input();
          return tokens.T_DOUBLE_COLON;
        } else {
          return ':';
        }
      },
      '(': function() {
        var initial = this.offset;
        this.input();
        if (this.is_TABSPACE()) {
          this.consume_TABSPACE().input();
        }
        if (this.is_LABEL_START()) {
          var yylen = this.yytext.length;
          this.consume_LABEL();
          var castToken = this.yytext.substring(yylen - 1).toLowerCase();
          var castId = castKeywords[castToken];
          if (castId) {
            this.input();
            if (this.is_TABSPACE()) {
              this.consume_TABSPACE().input();
            }
            if (this._input[this.offset - 1] === ')') {
              return castId;
            }
          }
        }
        // revert the check
        this.unput(this.offset - initial);
        return '(';
      },
      '=': function() {
        var nchar = this._input[this.offset];
        if (nchar === '>') {
          this.input();
          return tokens.T_DOUBLE_ARROW;
        } else if (nchar === '=') {
          if (this._input[this.offset + 1] === '=') {
            this.consume(2);
            return tokens.T_IS_IDENTICAL;
          } else {
            this.input();
            return tokens.T_IS_EQUAL;
          }
        }
        return '=';
      },
      '+': function() {
        var nchar = this._input[this.offset];
        if (nchar === '+') {
          this.input();
          return tokens.T_INC;
        } else if (nchar === '=') {
          this.input();
          return tokens.T_PLUS_EQUAL;
        }
        return '+';
      },
      '!': function() {
        if (this._input[this.offset] === '=') {
          if (this._input[this.offset + 1] === '=') {
            this.consume(2);
            return tokens.T_IS_NOT_IDENTICAL;
          } else {
            this.input();
            return tokens.T_IS_NOT_EQUAL;
          }
        }
        return '!';
      },
      '?': function() {
        if (this._input[this.offset] === '?') {
          this.input();
          return tokens.T_COALESCE;
        }
        return '?';
      },
      '<': function() {
        var nchar = this._input[this.offset];
        if (nchar === '<') {
          nchar = this._input[this.offset + 1];
          if (nchar === '=') {
            this.consume(2);
            return tokens.T_SL_EQUAL;
          } else if (nchar === '<') {
            if (this.is_HEREDOC()) {
              return tokens.T_START_HEREDOC;
            }
          }
          this.input();
          return tokens.T_SL;
        } else if (nchar === '=') {
          this.input();
          if (this._input[this.offset] === '>') {
            this.input();
            return tokens.T_SPACESHIP;
          } else {
            return tokens.T_IS_SMALLER_OR_EQUAL;
          }
        } else if (nchar === '>') {
          this.input();
          return tokens.T_IS_NOT_EQUAL;
        }
        return '<';
      },
      '>': function() {
        var nchar = this._input[this.offset];
        if (nchar === '=') {
          this.input();
          return tokens.T_IS_GREATER_OR_EQUAL;
        } else if (nchar === '>') {
          nchar = this._input[this.offset + 1];
          if (nchar === '=') {
            this.consume(2);
            return tokens.T_SR_EQUAL;
          } else {
            this.input();
            return tokens.T_SR;
          }
        }
        return '>';
      },
      '*': function() {
        var nchar = this._input[this.offset];
        if (nchar === '=') {
          this.input();
          return tokens.T_MUL_EQUAL;
        } else if(nchar === '*') {
          this.input();
          if (this._input[this.offset] === '=') {
            this.input();
            return tokens.T_POW_EQUAL;
          } else {
            return tokens.T_POW;
          }
        }
        return '*';
      },
      '.': function() {
        var nchar = this._input[this.offset];
        if (nchar === '=') {
          this.input();
          return tokens.T_CONCAT_EQUAL;
        } else if (nchar === '.' && this._input[this.offset + 1] === '.') {
          this.consume(2);
          return tokens.T_ELLIPSIS;
        }
        return '.';
      },
      '%': function() {
        if (this._input[this.offset] === '=') {
          this.input();
          return tokens.T_MOD_EQUAL;
        }
        return '%';
      },
      '&': function() {
        var nchar = this._input[this.offset];
        if (nchar === '=') {
          this.input();
          return tokens.T_AND_EQUAL;
        } else if (nchar === '&') {
          this.input();
          return tokens.T_BOOLEAN_AND;
        }
        return '&';
      },
      '|': function() {
        var nchar = this._input[this.offset];
        if (nchar === '=') {
          this.input();
          return tokens.T_OR_EQUAL;
        } else if (nchar === '|') {
          this.input();
          return tokens.T_BOOLEAN_OR;
        }
        return '|';
      },
      '^': function() {
        if (this._input[this.offset] === '=') {
          this.input();
          return tokens.T_XOR_EQUAL;
        }
        return '^';
      }
    }
  };
};