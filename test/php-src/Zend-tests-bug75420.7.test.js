// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75420.7.phpt
  it("Bug #75420.7 (Indirect modification of magic method argument)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __set($x,$v) { $GLOBALS[\"name\"] = 24; var_dump($x); }\n}\n$obj = new Test;\n$name = \"foo\";\n$name = str_repeat($name, 2);\n$obj->$name = 1;\nvar_dump($name);\n?>")).toMatchSnapshot();
  });
});
