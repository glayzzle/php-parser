// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78356.phpt
  it("Bug #78356: Array returned from ArrayAccess is incorrectly unpacked as argument", function () {
    expect(parser.parseCode("<?php\n$object = new class implements ArrayAccess {\n    public function offsetGet($offset): mixed\n    {\n        return [1, 2];\n    }\n    public function offsetExists($offset): bool\n    {\n        return true;\n    }\n    public function offsetUnset($offset): void {}\n    public function offsetSet($offset, $value): void {}\n};\nvar_dump(max(...$object[0]));\n?>")).toMatchSnapshot();
  });
});
