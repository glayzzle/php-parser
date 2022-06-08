// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_uasort_basic1.phpt
  it("SPL: Test ArrayObject::uasort() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/* Sort the entries by values user defined function.\n * Source code: ext/spl/spl_array.c\n * Alias to functions:\n */\necho \"*** Testing ArrayObject::uasort() : basic functionality ***\\n\";\n// Reverse sorter\nfunction cmp($value1, $value2) {\n  if($value1 == $value2) {\n    return 0;\n  }\n  else if($value1 < $value2) {\n    return 1;\n  }\n  else\n    return -1;\n}\n$ao = new ArrayObject(array(2,3,1));\n$ao->uasort('cmp');\nvar_dump($ao);\n?>")).toMatchSnapshot();
  });
});
