// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill_keys_variation3.phpt
  it("Test array_fill_keys() function : variation of parameter", function () {
    expect(parser.parseCode("<?php\n/* Testing with unexpected argument types */\necho \"*** Testing array_fill_keys() : parameter variations ***\\n\";\n$fp = fopen(__FILE__, \"r\");\n$array = array(\"one\", \"two\");\necho \"\\n-- Testing array_fill_keys() function with unusual second arguments --\\n\";\nvar_dump( array_fill_keys($array, $fp) );\nfclose($fp);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
