// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug40709.phpt
  it("Bug #40709 (array_reduce() behaves strange with one item stored arrays)", function () {
    expect(parser.parseCode("<?php\nfunction CommaSeparatedList($a, $b) {\n    if($a == null)\n        return $b;\n    else\n        return $a.','.$b;\n}\n$arr1 = array(1,2,3);\n$arr2 = array(1);\necho \"result for arr1: \".array_reduce($arr1,'CommaSeparatedList').\"\\n\";\necho \"result for arr2: \".array_reduce($arr2,'CommaSeparatedList').\"\\n\";\necho \"result for arr1: \".array_reduce($arr1,'CommaSeparatedList').\"\\n\";\necho \"result for arr2: \".array_reduce($arr2,'CommaSeparatedList').\"\\n\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
