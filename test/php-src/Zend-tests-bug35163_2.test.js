// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35163_2.phpt
  it("Bug #35163.2 (Array elements can lose references)", function () {
    expect(parser.parseCode("<?php\n$a = array(1);\n$b = 'a';\n${$b}[] =& $$b;\n${$b}[] =& $$b;\n${$b}[0] = 2;\nvar_dump($a);\n$a[0] = null;\n$a = null;\n?>")).toMatchSnapshot();
  });
});
