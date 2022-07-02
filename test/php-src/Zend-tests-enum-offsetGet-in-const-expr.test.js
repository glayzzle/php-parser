// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/offsetGet-in-const-expr.phpt
  it("Enum offsetGet in constant expression", function () {
    expect(parser.parseCode("<?php\nenum Foo implements ArrayAccess {\n    case Bar;\n    public function offsetGet($key): mixed {\n        return 42;\n    }\n    public function offsetExists($key): bool {}\n    public function offsetSet($key, $value): void {}\n    public function offsetUnset($key): void {}\n}\nclass X {\n    const FOO_BAR = Foo::Bar[0];\n}\nvar_dump(X::FOO_BAR);\n?>")).toMatchSnapshot();
  });
});
