/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const newline = ["\n", "\r"];
const valid_after_heredoc = ["\n", "\r", ";"];
const valid_after_heredoc_73 = valid_after_heredoc.concat([
  "\t",
  " ",
  ",",
  "]",
  ")",
  "/",
  "=",
  "!",
]);

module.exports = {
  T_CONSTANT_ENCAPSED_STRING: function () {
    let ch;
    while (this.offset < this.size) {
      ch = this.input();
      if (ch == "\\") {
        this.input();
      } else if (ch == "'") {
        break;
      }
    }
    return this.tok.T_CONSTANT_ENCAPSED_STRING;
  },
  // check if matching a HEREDOC state
  is_HEREDOC: function () {
    const revert = this.offset;
    if (
      this._input[this.offset - 1] === "<" &&
      this._input[this.offset] === "<" &&
      this._input[this.offset + 1] === "<"
    ) {
      this.offset += 3;

      // optional tabs / spaces
      if (this.is_TABSPACE()) {
        while (this.offset < this.size) {
          this.offset++;
          if (!this.is_TABSPACE()) {
            break;
          }
        }
      }

      // optional quotes
      let tChar = this._input[this.offset - 1];
      if (tChar === "'" || tChar === '"') {
        this.offset++;
      } else {
        tChar = null;
      }

      // required label
      if (this.is_LABEL_START()) {
        let yyoffset = this.offset - 1;
        while (this.offset < this.size) {
          this.offset++;
          if (!this.is_LABEL()) {
            break;
          }
        }
        const yylabel = this._input.substring(yyoffset, this.offset - 1);
        if (!tChar || tChar === this._input[this.offset - 1]) {
          // required ending quote
          if (tChar) this.offset++;
          // require newline
          if (newline.includes(this._input[this.offset - 1])) {
            // go go go
            this.heredoc_label.label = yylabel;
            this.heredoc_label.length = yylabel.length;
            this.heredoc_label.finished = false;
            yyoffset = this.offset - revert;
            this.offset = revert;
            this.consume(yyoffset);
            if (tChar === "'") {
              this.begin("ST_NOWDOC");
            } else {
              this.begin("ST_HEREDOC");
            }
            // prematch to get the indentation information from end of doc
            this.prematch_ENDOFDOC();
            return this.tok.T_START_HEREDOC;
          }
        }
      }
    }
    this.offset = revert;
    return false;
  },
  ST_DOUBLE_QUOTES: function () {
    let ch;
    while (this.offset < this.size) {
      ch = this.input();
      if (ch == "\\") {
        this.input();
      } else if (ch == '"') {
        break;
      } else if (ch == "$") {
        ch = this.input();
        if (ch == "{" || this.is_LABEL_START()) {
          this.unput(2);
          break;
        }
        if (ch) this.unput(1);
      } else if (ch == "{") {
        ch = this.input();
        if (ch == "$") {
          this.unput(2);
          break;
        }
        if (ch) this.unput(1);
      }
    }
    if (ch == '"') {
      return this.tok.T_CONSTANT_ENCAPSED_STRING;
    } else {
      let prefix = 1;
      if (this.yytext[0] === "b" || this.yytext[0] === "B") {
        prefix = 2;
      }
      if (this.yytext.length > 2) {
        this.appendToken(
          this.tok.T_ENCAPSED_AND_WHITESPACE,
          this.yytext.length - prefix
        );
      }
      this.unput(this.yytext.length - prefix);
      this.begin("ST_DOUBLE_QUOTES");
      return this.yytext;
    }
  },

  // check if its a DOC end sequence
  isDOC_MATCH: function (offset, consumeLeadingSpaces) {
    // @fixme : check if out of text limits

    // consumeLeadingSpaces is false happen DOC prematch END HEREDOC stage.

    // Ensure current state is really after a new line break, not after a such as ${variables}
    const prev_ch = this._input[offset - 2];
    if (!newline.includes(prev_ch)) {
      return false;
    }

    // skip leading spaces or tabs
    let indentation_uses_spaces = false;
    let indentation_uses_tabs = false;
    // reset heredoc_label structure
    let indentation = 0;
    let leading_ch = this._input[offset - 1];

    if (this.version >= 703) {
      while (leading_ch === "\t" || leading_ch === " ") {
        if (leading_ch === " ") {
          indentation_uses_spaces = true;
        } else if (leading_ch === "\t") {
          indentation_uses_tabs = true;
        }

        leading_ch = this._input[offset + indentation];
        indentation++;
      }

      // Move offset to skip leading whitespace
      offset = offset + indentation;

      // return out if there was only whitespace on this line
      if (newline.includes(this._input[offset - 1])) {
        return false;
      }
    }

    if (
      this._input.substring(
        offset - 1,
        offset - 1 + this.heredoc_label.length
      ) === this.heredoc_label.label
    ) {
      const ch = this._input[offset - 1 + this.heredoc_label.length];
      if (
        (this.version >= 703
          ? valid_after_heredoc_73
          : valid_after_heredoc
        ).includes(ch)
      ) {
        if (consumeLeadingSpaces) {
          this.consume(indentation);
          // https://wiki.php.net/rfc/flexible_heredoc_nowdoc_syntaxes
          if (indentation_uses_spaces && indentation_uses_tabs) {
            throw new Error(
              "Parse error:  mixing spaces and tabs in ending marker at line " +
                this.yylineno +
                " (offset " +
                this.offset +
                ")"
            );
          }
        } else {
          // Called in prematch_ENDOFDOC
          this.heredoc_label.indentation = indentation;
          this.heredoc_label.indentation_uses_spaces = indentation_uses_spaces;
          this.heredoc_label.first_encaps_node = true;
        }
        return true;
      }
    }

    return false;
  },

  /*
   * Prematch the end of HEREDOC/NOWDOC end tag to preset the
   * context of this.heredoc_label
   */
  prematch_ENDOFDOC: function () {
    // reset heredoc
    this.heredoc_label.indentation_uses_spaces = false;
    this.heredoc_label.indentation = 0;
    this.heredoc_label.first_encaps_node = true;
    let offset = this.offset + 1;

    while (offset < this._input.length) {
      // if match heredoc_label structrue will be set
      if (this.isDOC_MATCH(offset, false)) {
        return;
      }

      if (!newline.includes(this._input[offset - 1])) {
        // skip one line
        while (
          !newline.includes(this._input[offset++]) &&
          offset < this._input.length
        ) {
          // skip
        }
      }

      offset++;
    }
  },

  matchST_NOWDOC: function () {
    // edge case : empty now doc
    if (this.isDOC_MATCH(this.offset, true)) {
      // @fixme : never reached (may be caused by quotes)
      this.consume(this.heredoc_label.length);
      this.popState();
      return this.tok.T_END_HEREDOC;
    }
    // SCANNING CONTENTS
    let ch = this._input[this.offset - 1];
    while (this.offset < this.size) {
      if (newline.includes(ch)) {
        ch = this.input();
        if (this.isDOC_MATCH(this.offset, true)) {
          this.unput(1).popState();
          this.appendToken(this.tok.T_END_HEREDOC, this.heredoc_label.length);
          return this.tok.T_ENCAPSED_AND_WHITESPACE;
        }
      } else {
        ch = this.input();
      }
    }
    // too bad ! reached end of document (will get a parse error)
    return this.tok.T_ENCAPSED_AND_WHITESPACE;
  },

  matchST_HEREDOC: function () {
    // edge case : empty here doc
    let ch = this.input();
    if (this.isDOC_MATCH(this.offset, true)) {
      this.consume(this.heredoc_label.length - 1);
      this.popState();
      return this.tok.T_END_HEREDOC;
    }
    // SCANNING CONTENTS
    while (this.offset < this.size) {
      if (ch === "\\") {
        ch = this.input(); // ignore next
        if (!newline.includes(ch)) {
          ch = this.input();
        }
      }

      if (newline.includes(ch)) {
        ch = this.input();
        if (this.isDOC_MATCH(this.offset, true)) {
          this.unput(1).popState();
          this.appendToken(this.tok.T_END_HEREDOC, this.heredoc_label.length);
          return this.tok.T_ENCAPSED_AND_WHITESPACE;
        }
      } else if (ch === "$") {
        ch = this.input();
        if (ch === "{") {
          // start of ${
          this.begin("ST_LOOKING_FOR_VARNAME");
          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
          }
        } else if (this.is_LABEL_START()) {
          // start of $var...
          const yyoffset = this.offset;
          const next = this.consume_VARIABLE();
          if (this.yytext.length > this.offset - yyoffset + 2) {
            this.appendToken(next, this.offset - yyoffset + 2);
            this.unput(this.offset - yyoffset + 2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return next;
          }
          //console.log(this.yytext);
        }
      } else if (ch === "{") {
        ch = this.input();
        if (ch === "$") {
          // start of {$...
          this.begin("ST_IN_SCRIPTING");
          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_CURLY_OPEN, 1);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            this.unput(1);
            return this.tok.T_CURLY_OPEN;
          }
        }
      } else {
        ch = this.input();
      }
    }

    // too bad ! reached end of document (will get a parse error)
    return this.tok.T_ENCAPSED_AND_WHITESPACE;
  },

  consume_VARIABLE: function () {
    this.consume_LABEL();
    const ch = this.input();
    if (ch == "[") {
      this.unput(1);
      this.begin("ST_VAR_OFFSET");
      return this.tok.T_VARIABLE;
    } else if (ch === "-") {
      if (this.input() === ">") {
        this.input();
        if (this.is_LABEL_START()) {
          this.begin("ST_LOOKING_FOR_PROPERTY");
        }
        this.unput(3);
        return this.tok.T_VARIABLE;
      } else {
        this.unput(2);
      }
    } else {
      if (ch) this.unput(1);
    }
    return this.tok.T_VARIABLE;
  },
  // HANDLES BACKQUOTES
  matchST_BACKQUOTE: function () {
    let ch = this.input();
    if (ch === "$") {
      ch = this.input();
      if (ch === "{") {
        this.begin("ST_LOOKING_FOR_VARNAME");
        return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
      } else if (this.is_LABEL_START()) {
        const tok = this.consume_VARIABLE();
        return tok;
      }
    } else if (ch === "{") {
      if (this._input[this.offset] === "$") {
        this.begin("ST_IN_SCRIPTING");
        return this.tok.T_CURLY_OPEN;
      }
    } else if (ch === "`") {
      this.popState();
      return "`";
    }

    // any char
    while (this.offset < this.size) {
      if (ch === "\\") {
        this.input();
      } else if (ch === "`") {
        this.unput(1);
        this.popState();
        this.appendToken("`", 1);
        break;
      } else if (ch === "$") {
        ch = this.input();
        if (ch === "{") {
          this.begin("ST_LOOKING_FOR_VARNAME");
          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
          }
        } else if (this.is_LABEL_START()) {
          // start of $var...
          const yyoffset = this.offset;
          const next = this.consume_VARIABLE();
          if (this.yytext.length > this.offset - yyoffset + 2) {
            this.appendToken(next, this.offset - yyoffset + 2);
            this.unput(this.offset - yyoffset + 2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return next;
          }
        }
        continue;
      } else if (ch === "{") {
        ch = this.input();
        if (ch === "$") {
          // start of {$...
          this.begin("ST_IN_SCRIPTING");
          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_CURLY_OPEN, 1);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            this.unput(1);
            return this.tok.T_CURLY_OPEN;
          }
        }
        continue;
      }
      ch = this.input();
    }
    return this.tok.T_ENCAPSED_AND_WHITESPACE;
  },

  matchST_DOUBLE_QUOTES: function () {
    let ch = this.input();
    if (ch === "$") {
      ch = this.input();
      if (ch === "{") {
        this.begin("ST_LOOKING_FOR_VARNAME");
        return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
      } else if (this.is_LABEL_START()) {
        const tok = this.consume_VARIABLE();
        return tok;
      }
    } else if (ch === "{") {
      if (this._input[this.offset] === "$") {
        this.begin("ST_IN_SCRIPTING");
        return this.tok.T_CURLY_OPEN;
      }
    } else if (ch === '"') {
      this.popState();
      return '"';
    }

    // any char
    while (this.offset < this.size) {
      if (ch === "\\") {
        this.input();
      } else if (ch === '"') {
        this.unput(1);
        this.popState();
        this.appendToken('"', 1);
        break;
      } else if (ch === "$") {
        ch = this.input();
        if (ch === "{") {
          this.begin("ST_LOOKING_FOR_VARNAME");
          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
          }
        } else if (this.is_LABEL_START()) {
          // start of $var...
          const yyoffset = this.offset;
          const next = this.consume_VARIABLE();
          if (this.yytext.length > this.offset - yyoffset + 2) {
            this.appendToken(next, this.offset - yyoffset + 2);
            this.unput(this.offset - yyoffset + 2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return next;
          }
        }
        if (ch) this.unput(1);
      } else if (ch === "{") {
        ch = this.input();
        if (ch === "$") {
          // start of {$...
          this.begin("ST_IN_SCRIPTING");
          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_CURLY_OPEN, 1);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            // @fixme : yytext = '"{$' (this.yytext.length > 3)
            this.unput(1);
            return this.tok.T_CURLY_OPEN;
          }
        }
        if (ch) this.unput(1);
      }
      ch = this.input();
    }
    return this.tok.T_ENCAPSED_AND_WHITESPACE;
  },
};
