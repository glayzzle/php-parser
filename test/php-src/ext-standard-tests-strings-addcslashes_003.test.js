// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/addcslashes_003.phpt
  it("Test addcslashes() function (variation 3)", function () {
    expect(parser.parseCode("<?php\n/* Miscellaneous input */\necho \"\\n*** Testing addcslashes() with miscellaneous input arguments ***\\n\";\nvar_dump( addcslashes(\"\", \"\") );\nvar_dump( addcslashes(\"\", \"burp\") );\nvar_dump( addcslashes(\"kaboemkara!\", \"\") );\nvar_dump( addcslashes(\"foobarbaz\", 'bar') );\nvar_dump( addcslashes('foo[ ]', 'A..z') );\nvar_dump( @addcslashes(\"zoo['.']\", 'z..A') );\nvar_dump( addcslashes('abcdefghijklmnopqrstuvwxyz', \"a\\145..\\160z\") );\nvar_dump( addcslashes( 123, 123 ) );\nvar_dump( addcslashes( 0, 0 ) );\nvar_dump( addcslashes( \"\\0\" , 0 ) );\nvar_dump( addcslashes( -1.234578, 3 ) );\nvar_dump( addcslashes( \" \", \" \") );\nvar_dump( addcslashes( \"string\\x00with\\x00NULL\", \"\\0\") );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
