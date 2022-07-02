// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug34982.phpt
  it("Bug #34982 (array_walk_recursive() modifies elements outside function scope)", function () {
    expect(parser.parseCode("<?php\n$ar = array(\n    'element 1',\n    array('subelement1')\n    );\nfunc($ar);\nprint_r($ar);\nfunction func($a) {\n  array_walk_recursive($a, 'apply');\n  print_r($a);\n}\nfunction apply(&$input, $key) {\n  $input = 'changed';\n}\n?>")).toMatchSnapshot();
  });
});
