// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75420.phpt
  it("Bug #75420 (Crash when modifying property name in __isset for BP_VAR_IS)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __isset($x) { $GLOBALS[\"name\"] = 24; return true; }\npublic function __get($x) { var_dump($x); return 42; }\n}\n$obj = new Test;\n$name = \"foo\";\nvar_dump($obj->$name ?? 12);\n?>")).toMatchSnapshot();
  });
});
