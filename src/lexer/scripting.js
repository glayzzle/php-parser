/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(lexer, tokens) {
  return {
    matchST_IN_SCRIPTING: function() {
      var ch = this.input();
      switch(ch) {
        case ' ':
        case '\t':
        case '\n':
        case '\r':
        case '\r\n':
          return this.T_WHITESPACE();
        case '#':
          return this.T_COMMENT();
        case '/':
          if (this._input[this.offset] === '/') {
            return this.T_COMMENT();
          } else if (this._input[this.offset] === '*') {
            this.input();
            return this.T_DOC_COMMENT();
          }
          return this.consume_TOKEN();
        case '\'':
          return this.T_CONSTANT_ENCAPSED_STRING();
        case '"':
          return this.ST_DOUBLE_QUOTES();
        case '?':
          if (!this.aspTagMode && this.tryMatch('>')) {
            this.input();
            var nextCH = this._input[this.offset];
            if (nextCH === '\n' || nextCH === '\r') this.input();
            this.popState();
            return tokens.T_CLOSE_TAG;
          }
          return this.consume_TOKEN();
        case '%':
          if (this.aspTagMode && this.tryMatch('>')) {
            this.input();
            var nextCH = this._input[this.offset + 1];
            if (nextCH === '\n' || nextCH === '\r') this.input();
            this.aspTagMode = false;
            this.popState();
            return tokens.T_CLOSE_TAG;
          }
          return this.consume_TOKEN();
        case '{': return '{';
        case '}':
          if (
            this.conditionStack.length > 2
            && this.conditionStack[this.conditionStack.length - 2] !== 'ST_IN_SCRIPTING'
          ) {
            // Return to HEREDOC/ST_DOUBLE_QUOTES mode
            this.popState();
          }
          return '}';
        default:
          if (ch === '.') {
            this.input();
            if (this.is_NUM()) {
              return this.consume_NUM();
            } else {
              this.unput(1);
            }
          }
          if (this.is_NUM()) {
            return this.consume_NUM();
          } else if (this.is_LABEL_START()) {
            return this.consume_LABEL().T_STRING();
          } else if(this.is_TOKEN()) {
            return this.consume_TOKEN();
          }
      }
      throw new Error('Bad terminal sequence "' + ch + '"');
    },
    
    T_WHITESPACE: function() {
      while(this.offset < this.size) {
        var ch = this.input();
        if (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
          continue;
        }
        this.unput(1);
        break;
      }
      return tokens.T_WHITESPACE;
    }
  };
};

