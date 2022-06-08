// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35163_3.phpt
  it("Bug #35163.3 (Array elements can lose references)", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass;\n$a->b = array(1);\n$a->b[] =& $a->b;\n$a->b[] =& $a->b;\n$a->b[0] = 2;\nvar_dump($a);\n$a->b = null;\n$a = null;\n?>")).toMatchSnapshot();
  });
});
