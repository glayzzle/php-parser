
<ST_IN_SCRIPTING>"#"|"//" {
  while(this._input.length > 0) {
    var char = this.input();
    if (
      char == '\r'
      || char == '\n'
      || char == '\r\n'
    ) {
      break;
    } else if (
      char == '?'
      && this._input[0] == '>'
    ) {
      // end of PHP tag
      this.unput(char);
      break;
    } else if (
      this.asp_tags
      && char == '%'
      && this._input[0] == '>'
    ) {
      // end of PHP(ASP-Like) tag
      this.unput(char);
      break;
    }
  }
  return T_COMMENT;
}

<ST_IN_SCRIPTING>"/**"{WHITESPACE}|"/*" {
  var type = T_COMMENT;
  if (yytext.length > 2) {
    type = T_DOC_COMMENT;
  }
  while(this._input.length > 0) {
    var char = this.input();
    if (
      char == '*'
      && this._input[0] == '/'
    ) {
      this.input();
      break;
    }
  }
  return type;
}
