<ST_DOUBLE_QUOTES,ST_BACKQUOTE,ST_HEREDOC>"${" {
  this.begin('ST_LOOKING_FOR_VARNAME');
  return T_DOLLAR_OPEN_CURLY_BRACES;
}


/* Make sure a label character follows "->", otherwise there is no property
 * and "->" will be taken literally
 */
<ST_DOUBLE_QUOTES,ST_HEREDOC,ST_BACKQUOTE>"$"{LABEL}"->"[a-zA-Z_\x7f-\xff] {
  this.less(yyleng-3);
  this.begin('ST_LOOKING_FOR_PROPERTY');
  return T_VARIABLE;
}

/* A [ always designates a variable offset, regardless of what follows
 */
<ST_DOUBLE_QUOTES,ST_HEREDOC,ST_BACKQUOTE>"$"{LABEL}"[" {
  this.less(yyleng - 1);
  this.pushState('ST_VAR_OFFSET');
  return T_VARIABLE;
}

<ST_IN_SCRIPTING,ST_DOUBLE_QUOTES,ST_HEREDOC,ST_BACKQUOTE,ST_VAR_OFFSET>"$"{LABEL} {
  return T_VARIABLE;
}


<ST_IN_SCRIPTING>b?['] {
  var eot = this._input.length;
  var i = 0;
  var char;
  while(i < eot) {
    char = this._input[i];
    if (char == '\\') {
      i++;
    } else if (char == '\'') {
      break;
    }
    i++;
  }
  consume(this, i + 1);
  return T_CONSTANT_ENCAPSED_STRING;
}


<ST_IN_SCRIPTING>b?["] {
  var eot = this._input.length;
  var i = 0;
  var char;
  while(i < eot) {
    char = this._input[i];
    if (char == '\\') {
      i++;
    } else if (char == '"') {
      break;
    } else if (char == '$') {
      char = ++i < eot && this._input[i];
      i--;
      if ( char == '{' || IS_LABEL_START(char)) {
        break;
      }
    } else if (char == '{') {
      char = ++i < eot && this._input[i];
      i --;
      if (char == '$') {
        break;
      }
    }
    i++;
  }
  if (char == '"') {
    consume(this, i + 1);
    return T_CONSTANT_ENCAPSED_STRING;
  } else {
    this.begin("ST_DOUBLE_QUOTES");
    return '"';
  }
}


<ST_IN_SCRIPTING>b?"<<<"{TABS_AND_SPACES}({LABEL}|([']{LABEL}['])|(["]{LABEL}["])){NEWLINE} {
  this.heredoc_label = this.matches[2];
  if (this.heredoc_label[0] == '\'') {
    this.begin('ST_NOWDOC');
    this.heredoc_label = this.heredoc_label.substring(1, this.heredoc_label.length - 1);
  } else {
    if (this.heredoc_label[0] == '"') {
      this.heredoc_label = this.heredoc_label.substring(1, this.heredoc_label.length - 1);
    }
    this.begin('ST_HEREDOC');
  }
  return T_START_HEREDOC;
}


<ST_IN_SCRIPTING>[`] {
  this.begin("ST_BACKQUOTE");
  return '`';
}


<ST_END_HEREDOC>{ANY_CHAR} {
  this.popState();
  this.popState();
  consume(this, this.heredoc_label.length - 1);
  return T_END_HEREDOC;
}


<ST_DOUBLE_QUOTES,ST_BACKQUOTE,ST_HEREDOC>"{$" {
  this.less(1);
  this.begin('ST_IN_SCRIPTING');
  return T_CURLY_OPEN;
}


<ST_DOUBLE_QUOTES>["] {
  this.popState();
  return '"';
}

<ST_BACKQUOTE>[`] {
  this.popState();
  return '`';
}


<ST_DOUBLE_QUOTES>{ANY_CHAR} {
  var eot = this._input.length;
  var i = 0;
  var char;
  if (yytext == '\\') i++;
  while(i < eot) {
    char = this._input[i];
    if (char == '\\') {
      i++;
    } else if (char == '"') {
      i--; // exclude "
      break;
    } else if (char == '$') {
      char = ++i < eot && this._input[i];
      if ( char == '{' || IS_LABEL_START(char)) {
        i -= 2;
        break;
      } else continue;
    } else if (char == '{') {
      char = ++i < eot && this._input[i];
      if (char == '$') {
        i -= 2;
        break;
      } else continue;
    }
    i++;
  }
  consume(this, i + 1);
  return T_ENCAPSED_AND_WHITESPACE;
}


<ST_BACKQUOTE>{ANY_CHAR} {
  if (yytext == '\\') this.input();
  while(this._input.length > 0) {
    var char = this.input();
    if (char == '\\') {
      this.input();
    } else if ( char == '$' ) {
      if (
        this._input[0] == '{'
        || IS_LABEL_START(char)
      ) {
        this.unput(char);
        break;
      }
    } else if (char == '`') {
      this.unput(char);
      break;
    }
  }
  // yytext = scan_escape_string(yytext);
  return T_ENCAPSED_AND_WHITESPACE;
}

<ST_HEREDOC>{ANY_CHAR} {
  var scan = this.matches[0] + this._input;
  var eot = scan.length;
  var i = 0, eol;
  var char;
  var lblLen = this.heredoc_label.length;
  var found = false, newLine = 1;

  /** edge case : empty here doc **/
  if (scan.substring(0, lblLen) == this.heredoc_label) {
    eol = scan[lblLen];
    if ( eol == '\n' || eol == '\r' || eol == ';') {
      consume(this, lblLen - 1);
      this.popState();
      return T_END_HEREDOC;
    }
  }

  while(i < eot) {
    char = scan[i];
    if (char == '\n' || char == '\r') {
      if (char == '\r') {
        if (++i < eot) {
          char = scan[i];
          if (char !== '\n') {
            i--;
          }
        }
      }
      // @fixme : check if out of text limits
      if (scan.substring(i + 1, i + lblLen + 1) == this.heredoc_label) {
        eol = scan[ i + lblLen + 1];
        if ( eol == '\n' || eol == '\r' || eol == ';') {
          found = true;
          break;
        }
      }
    }
    else if (char === '\\') {
      char = ++i < eot && scan[i];
      if (char == '\n' || char == '\r') {
        i--;
      }
    }
    else if (char == '$') {
      char = ++i < eot && scan[i];
      if (char == '{' || IS_LABEL_START(char)) {
        i -= 2;
        break;
      }  else continue;
    }
    else if (char == '{') {
      char = ++i < eot && scan[i];
      if (char == '$') {
        i -= 2;
        break;
      } else continue;
    }
    i++;
  }
  consume(this, i + 1 - this.matches[0].length);
  if (found) this.begin('ST_END_HEREDOC');
  return T_ENCAPSED_AND_WHITESPACE;
}


<ST_NOWDOC>{ANY_CHAR} {
  var scan = this.matches[0] + this._input;
  var eot = scan.length;
  var i = 0, eol;
  var char;
  var lblLen = this.heredoc_label.length;

  /** edge case : empty now doc **/
  if (scan.substring(0, lblLen) == this.heredoc_label) {
    eol = scan[lblLen];
    if ( eol == '\n' || eol == '\r' || eol == ';') {
      consume(this, lblLen - 1);
      this.popState();
      return T_END_HEREDOC;
    }
  }

  while(i < eot) {
    char = scan[i];
    if (char == '\n' || char == '\r') {
      if (char == '\r') {
        char = ++i < eot && scan[i];
        if (char !== '\n') i--;
      }
      // @fixme : check if out of text limits
      if (scan.substring(i + 1, i + lblLen + 1) == this.heredoc_label) {
        eol = scan[ i + lblLen + 1];
        if ( eol == '\n' || eol == '\r' || eol == ';') {
          break;
        }
      }
    }
    i++;
  }
  consume(this, i + 1 - this.matches[0].length);
  this.begin('ST_END_HEREDOC');
  return T_ENCAPSED_AND_WHITESPACE;
}
