// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75420.6.phpt
  it("Bug #75420.6 (Indirect modification of magic method argument)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __isset($x) { $GLOBALS[\"obj\"] = 24; return true; }\n    public function __get($x) { var_dump($this); return 42; }\n}\n$obj = new Test;\n$name = \"foo\";\nvar_dump(empty($obj->$name));\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
