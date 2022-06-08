// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75420.15.phpt
  it("Bug #75420.15 (Indirect modification of magic method argument)", function () {
    expect(parser.parseCode("<?php\nclass Test implements ArrayAccess {\n    public function offsetExists($x): bool { }\n    public function offsetGet($x): mixed { }\n    public function offsetSet($x, $y): void { $GLOBALS[\"name\"] = 24; var_dump($x); }\n    public function offsetUnset($x): void { }\n}\n$obj = new Test;\n$name = \"foo\";\n$name = str_repeat($name, 2);\n$obj[$name] = 1;\nvar_dump($name);\n?>")).toMatchSnapshot();
  });
});
