// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75420.11.phpt
  it("Bug #75420.11 (Indirect modification of magic method argument)", function () {
    expect(parser.parseCode("<?php\nclass Test implements ArrayAccess {\n    public function offsetExists($x): bool { $GLOBALS[\"name\"] = 24; return true; }\n    public function offsetGet($x): mixed { var_dump($x); return 42; }\n    public function offsetSet($x, $y): void { }\n    public function offsetUnset($x): void { }\n}\n$obj = new Test;\n$name = \"foo\";\nvar_dump(empty($obj[$name]));\nvar_dump($name);\n?>")).toMatchSnapshot();
  });
});
