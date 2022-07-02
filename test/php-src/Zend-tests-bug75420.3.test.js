// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75420.3.phpt
  it("Bug #75420.3 (Indirect modification of magic method argument)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __isset($x) { $GLOBALS[\"name\"] = 24; return true; }\n    public function __get($x) { var_dump($x); return 42; }\n}\n$obj = new Test;\n$name = \"foo\";\nvar_dump(empty($obj->$name));\nvar_dump($name);\n?>")).toMatchSnapshot();
  });
});
