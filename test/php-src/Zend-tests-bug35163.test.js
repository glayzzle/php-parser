// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35163.phpt
  it("Bug #35163 (Array elements can lose references)", function () {
    expect(parser.parseCode("<?php\n$a = array(array(1));\n$a[0][] =& $a[0];\n$a[0][] =& $a[0];\n$a[0][0] = 2;\nvar_dump($a);\n$a[0] = null;\n$a = null;\n?>")).toMatchSnapshot();
  });
});
