// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_variation4.phpt
  it("Test natcasesort() function : usage variations - different string types", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass arrays of string data to see how natcasesort() re-orders the array\n */\necho \"*** Testing natcasesort() : usage variation ***\\n\";\n$inputs = array (\n    // group of escape sequences\n    array(null, NULL, \"\\a\", \"\\cx\", \"\\e\", \"\\f\", \"\\n\", \"\\t\", \"\\xhh\", \"\\ddd\", \"\\v\"),\n    // array contains combination of capital/small letters\n    array(\"lemoN\", \"Orange\", \"banana\", \"apple\", \"Test\", \"TTTT\", \"ttt\", \"ww\", \"x\", \"X\", \"oraNGe\", \"BANANA\")\n);\nforeach ($inputs as $array_arg) {\n    var_dump( natcasesort($array_arg) );\n    var_dump($array_arg);\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
