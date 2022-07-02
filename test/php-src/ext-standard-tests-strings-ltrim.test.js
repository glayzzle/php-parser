// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/ltrim.phpt
  it("Test ltrim() function", function () {
    expect(parser.parseCode("<?php\n/*  Testing for Error conditions  */\n/*  Invalid Number of Arguments */\n echo \"\\n *** Output for Error Conditions ***\\n\";\n/* heredoc string */\n$str = <<<EOD\nus\ning heredoc string\nEOD;\necho \"\\n *** Using heredoc string ***\\n\";\nvar_dump( ltrim($str, \"\\nusi\") );\n/* Testing the Normal behaviour of ltrim() function */\n echo \"\\n *** Output for Normal Behaviour ***\\n\";\n var_dump ( ltrim(\" \\t\\0    ltrim test\") );                      /* without second Argument */\n var_dump ( ltrim(\"   ltrim test\" , \"\") );                       /* no characters in second Argument */\n var_dump ( ltrim(\"        ltrim test\", true) );                 /* with boolean value as second Argument */\n var_dump ( ltrim(\"        ltrim test\", \" \") );                  /* with single space as second Argument */\n var_dump ( ltrim(\"\\t\\n\\r\\0\\x0B ltrim test\", \"\\t\\n\\r\\0\\x0B\") );  /* with multiple escape sequences as second Argument */\n var_dump ( ltrim(\"ABCXYZltrim test\", \"A..Z\") );                 /* with characters range as second Argument */\n var_dump ( ltrim(\"0123456789ltrim test\", \"0..9\") );             /* with numbers range as second Argument */\n var_dump ( ltrim(\"@$#ltrim test\", \"#@$\") );                     /* with some special characters as second Argument */\necho \"\\n *** Output for  scalar argument) ***\\n\";\nvar_dump( ltrim(  12345  ) );                                   /* Scalar argument */\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
