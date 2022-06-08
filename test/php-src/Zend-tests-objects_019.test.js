// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_019.phpt
  it("Testing references of dynamic properties", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$foo = array(new stdclass, new stdclass);\n$foo[1]->a = &$foo[0]->a;\n$foo[0]->a = 2;\n$x = $foo[1]->a;\n$x = 'foo';\nvar_dump($foo, $x);\n?>")).toMatchSnapshot();
  });
});
