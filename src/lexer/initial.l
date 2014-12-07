
<INITIAL>"<%=" {
  if (conf.asp_tags) {
    this.begin("ST_IN_SCRIPTING");
    return T_OPEN_TAG_WITH_ECHO;
  } else {
    this.reject();
  }
}


<INITIAL>"<?=" {
  this.begin("ST_IN_SCRIPTING");
  return T_OPEN_TAG_WITH_ECHO;
}


<INITIAL>"<%" {
  if (conf.asp_tags) {
    this.begin("ST_IN_SCRIPTING");
    return T_OPEN_TAG;
  } else {
    this.reject();
  }
}


<INITIAL>"<?php"([ \t]|{NEWLINE}) {
  this.begin("ST_IN_SCRIPTING");
  return T_OPEN_TAG;
}


<INITIAL>"<?" {
  if (conf.short_tags) {
    this.begin("ST_IN_SCRIPTING");
    return T_OPEN_TAG;
  } else {
    throw new Error('Unauth state');
    this.unput("<?");
  }
}

<INITIAL>{ANY_CHAR} {
  var eot = this._input.length;
  var i = 0;
  var char;
  while(i < eot) {
    char = this._input[i];
    if (char == '<') {
      char = ++i < eot && this._input[i];
      if (char == '?') {
        if (
          this._input[i+1] == '='
          || this._input.substring(i + 1, i + 4) == 'php'
        ) {
          i --;
          break;
        }
      } else if(conf.asp_tags && char == '%') {
        i --;
        break;
      }
    }
    i++;
  }
  consume(this, i);
  return T_INLINE_HTML;
}

<ST_IN_SCRIPTING>"?>"{NEWLINE}? {
  this.popState();
  return T_CLOSE_TAG;
}


<ST_IN_SCRIPTING>"%>"{NEWLINE}? {
  if (conf.asp_tags) {
    this.popState();
    return T_CLOSE_TAG;  /* implicit ';' at php-end tag */
  } else {
    this.less(1);
    return yytext;
  }
}
