// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_split_basic.phpt
  it("Test str_split() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing str_split() : basic functionality ***\\n\";\n// Initialise all required variables\n$str = 'This is basic testcase';\n$split_length = 5;\n// Calling str_split() with all possible arguments\necho \"-- With all possible arguments --\\n\";\nvar_dump( str_split($str,$split_length) );\n// Calling str_split() with default arguments\necho \"-- With split_length as default argument --\\n\";\nvar_dump( str_split($str) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
