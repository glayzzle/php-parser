// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_uksort_basic1.phpt
  it("Test ArrayObject::uksort() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/* Sort the entries by key using user defined function.\n * Source code: ext/spl/spl_array.c\n * Alias to functions:\n */\necho \"*** Testing ArrayObject::uksort() : basic functionality ***\\n\";\n// Reverse sorter\nfunction cmp($value1, $value2) {\n  if($value1 == $value2) {\n    return 0;\n  }\n  else if($value1 < $value2) {\n    return 1;\n  }\n  else\n    return -1;\n}\n$ao = new ArrayObject(array(3=>0, 2=>1, 5=>2, 6=>3, 1=>4));\n$ao->uksort('cmp');\nvar_dump($ao);\n?>")).toMatchSnapshot();
  });
});
