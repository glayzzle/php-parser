<ST_IN_SCRIPTING>{EXPONENT_DNUM}|{DNUM} {
  return T_DNUMBER;
}

<ST_IN_SCRIPTING>{BNUM} {
  return T_LNUMBER;
}

<ST_IN_SCRIPTING>{HNUM} {
		return T_LNUMBER;
}

<ST_IN_SCRIPTING>{LNUM} {
  if (yyleng < MAX_LENGTH_OF_LONG - 1) {
    return T_LNUMBER;
  } else {
    if (
      yyleng == MAX_LENGTH_OF_LONG 
      && yytext < long_min_digits 
    ) {
      return T_LNUMBER;
    }
    return T_DNUMBER;
  }
}