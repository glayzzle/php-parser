// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chop_variation5.phpt
  it("Test chop() function : usage variations - miscellaneous arguments", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing chop() : with miscellaneous arguments\n*/\necho \"*** Testing chop() : with miscellaneous arguments ***\\n\";\n var_dump ( chop(\"chop test   \\t\\0 \") );                       /* without second Argument */\n var_dump ( chop(\"chop test   \" , \"\") );                       /* no characters in second Argument */\n var_dump ( chop(\"chop test        \", true) );                 /* with boolean value as second Argument */\n var_dump ( chop(\"chop test        \", \" \") );                  /* with single space as second Argument */\n var_dump ( chop(\"chop test \\t\\n\\r\\0\\x0B\", \"\\t\\n\\r\\0\\x0B\") );  /* with multiple escape sequences as second Argument */\n var_dump ( chop(\"chop testABCXYZ\", \"A..Z\") );                 /* with characters range as second Argument */\n var_dump ( chop(\"chop test0123456789\", \"0..9\") );             /* with numbers range as second Argument */\n var_dump ( chop(\"chop test$#@\", \"#@$\") );                     /* with some special characters as second Argument */\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
