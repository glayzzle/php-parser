// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_variation9.phpt
  it("Test natcasesort() function : usage variations - mixed array", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an array containing sub-arrays, ints, floats, strings, boolean, null\n * and escape characters to test how natcasesort() re-orders it\n */\necho \"*** Testing natcasesort() : usage variation ***\\n\";\n$mixed_values = array (\n  array(),\n  array( array(33, -5, 6),\n         array(11),\n         array(22, -55),\n         array()\n       ),\n  -4, \"4\", 4.00, \"b\", \"5\", -2, -2.0, -2.98989, \"-.9\", \"True\", \"\",\n  NULL, \"ab\", \"abcd\", 0.0, -0, \"abcd\\x00abcd\\x00abcd\", '', true, false\n);\n// suppress errors as is generating a lot of \"array to string\" notices\nvar_dump( @natcasesort($mixed_values) );\nvar_dump($mixed_values);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
