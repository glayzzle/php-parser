// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63882.phpt
  it("Bug #63882 (zend_std_compare_objects crash on recursion)", function () {
    expect(parser.parseCode("<?php\nclass Test { public $x = 5; }\n$testobj1 = new Test;\n$testobj2 = new Test;\n$testobj1->x = $testobj1;\n$testobj2->x = $testobj2;\nvar_dump($testobj1 == $testobj2);\n?>")).toMatchSnapshot();
  });
});
