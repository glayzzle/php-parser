// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_variation8.phpt
  it("Test natcasesort() function : usage variations - octal values", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an array of octal values to test how natcasesort() re-orders it\n */\necho \"*** Testing natcasesort() : usage variation ***\\n\";\n$unsorted_oct_array = array(01235, 0321, 0345, 066, 0772, 077, -066, -0345, 0);\nvar_dump( natcasesort($unsorted_oct_array) );\nvar_dump($unsorted_oct_array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
