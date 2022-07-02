// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29505.phpt
  it("Bug #29505 (get_class_vars() severely broken when used with arrays)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $empty = array();\n    public $three = array(1, \"b\"=>\"c\", 3=>array());\n}\nvar_dump(get_class_vars('Test'));\n?>")).toMatchSnapshot();
  });
});
