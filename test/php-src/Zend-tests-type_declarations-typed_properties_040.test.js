// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_040.phpt
  it("Test __get on unset typed property must fail properly", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nclass Foo {\n    public int $bar;\n    public function __get($name) {\n        var_dump($name);\n    }\n}\n$foo = new Foo();\nunset($foo->bar);\nvar_dump($foo->bar);\n?>")).toMatchSnapshot();
  });
});
