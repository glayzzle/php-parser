
<ST_LOOKING_FOR_VARNAME>{LABEL}[[}] {
  this.less(yyleng - 1);
  this.popState(); 
  console.log('---ST_LOOKING_FOR_VARNAME.LABEL');
  this.begin('ST_IN_SCRIPTING');
  return T_STRING_VARNAME;
}


<ST_LOOKING_FOR_VARNAME>{ANY_CHAR} {
  this.popState(); 
  this.less(0);
  console.log('---ST_LOOKING_FOR_VARNAME.ANY_CHAR');
  return false;
}


<ST_VAR_OFFSET>[0]|([1-9][0-9]*) { /* Offset could be treated as a long */
	return T_NUM_STRING;
}

<ST_VAR_OFFSET>{LNUM}|{HNUM}|{BNUM} { /* Offset must be treated as a string */
	return T_NUM_STRING;
}


<ST_VAR_OFFSET>"]" {
  this.popState();
  return ']';
}

<ST_VAR_OFFSET>{TOKENS}|[{}"`] {
	return yytext;
}

<ST_VAR_OFFSET>[ \n\r\t\\'#] {
  return T_ENCAPSED_AND_WHITESPACE;
}

<ST_IN_SCRIPTING,ST_VAR_OFFSET>{LABEL} {
	return T_STRING;
}