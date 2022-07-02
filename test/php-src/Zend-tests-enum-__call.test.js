// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/__call.phpt
  it("Enum __call", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    public function __call(string $name, array $args)\n    {\n        return [$name, $args];\n    }\n}\nvar_dump(Foo::Bar->baz('qux', 'quux'));\n?>")).toMatchSnapshot();
  });
});
