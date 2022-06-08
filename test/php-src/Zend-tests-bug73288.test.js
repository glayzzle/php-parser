// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73288.phpt
  it("Bug #73288 (Segfault in __clone > Exception.toString > __get)", function () {
    expect(parser.parseCode("<?php\nclass NoClone {\n    public function __clone() {\n        throw new Exception(\"No Cloneable\");\n    }\n}\nclass C {\n    public function __get($name) {\n        return new NoClone;\n    }\n}\nfunction test_clone() {\n    $c = new C;\n    $b = clone $c->x;\n}\ntest_clone();\n?>")).toMatchSnapshot();
  });
});
