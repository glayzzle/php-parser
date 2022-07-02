// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75420.8.phpt
  it("Bug #75420.8 (Indirect modification of magic method argument)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __set($x,$v) { $GLOBALS[\"obj\"] = 24; var_dump($this); }\n}\n$obj = new Test;\n$name = \"foo\";\n$obj->$name = 1;\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
