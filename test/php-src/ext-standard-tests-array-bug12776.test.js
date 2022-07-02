// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug12776.phpt
  it("Bug #12776 (array_walk crash)", function () {
    expect(parser.parseCode("<?php\nfunction test($val,$key)\n{\n    global $globalArray;\n    $globalArray[]=$key; // this will end up crashing\n    $globalArray[]=(string)$key; // this will end up OK\n    print \"val: $val; key: $key\\n\"; flush();\n}\n$arr=array('k'=>'v');\narray_walk($arr,'test');\nprint \"First value: \".$globalArray[0];\nprint \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
