// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_variation6.phpt
  it("Test natcasesort() function : usage variations - referenced variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an array of referenced variables to test how natcasesort() re-orders it\n */\necho \"*** Testing natcasesort() : usage variation ***\\n\";\n$value1 = 100;\n$value2 = 33;\n$value3 = 555;\necho \"\\n-- Initial test --\\n\";\n$array =  array( &$value1 , &$value2, &$value3);\nvar_dump( natcasesort($array) );\nvar_dump($array);\necho \"\\n-- Change \\$value1 --\\n\";\n$value1 = -29;\nvar_dump( natcasesort($array) );\nvar_dump($array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
