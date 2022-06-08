// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54367.phpt
  it("Bug #54367 (Use of closure causes problem in ArrayAccess)", function () {
    expect(parser.parseCode("<?php\nclass MyObjet implements ArrayAccess\n{\n    public function offsetSet($offset, $value): void { }\n    public function offsetExists($offset): bool {  }\n    public function offsetUnset($offset): void { }\n    public function offsetGet($offset): mixed\n    {\n    return function ($var) use ($offset) { // here is the problem\n              var_dump($offset, $var);\n        };\n    }\n}\n$a = new MyObjet();\necho $a['p']('foo');\n?>")).toMatchSnapshot();
  });
});
