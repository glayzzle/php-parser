// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strcspn_basic.phpt
  it("Test strcspn() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing strcspn() : basic functionality\n*/\necho \"*** Testing strcspn() : basic functionality ***\\n\";\n// Initialise all required variables\n$str = \"this is the test string\";\n$mask = \"es\";\n$start = 15;\n$len = 3;\n// Calling strcspn() with all possible arguments\nvar_dump( strcspn($str, $mask, $start, $len) );\n// Calling strcspn() with three arguments\nvar_dump( strcspn($str, $mask, $start) );\n// Calling strcspn() with default arguments\nvar_dump( strcspn($str, $mask) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
