// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/__invoke.phpt
  it("Enum __invoke", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    public function __invoke(...$args)\n    {\n        return $args;\n    }\n}\nvar_dump((Foo::Bar)('baz', 'qux'));\n?>")).toMatchSnapshot();
  });
});
