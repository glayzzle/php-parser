// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/__callStatic.phpt
  it("Enum __callStatic", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    public static function __callStatic(string $name, array $args)\n    {\n        return [$name, $args];\n    }\n}\nvar_dump(Foo::bar('baz', 'qux'));\n?>")).toMatchSnapshot();
  });
});
