// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_009.phpt
  it("Test typed properties unset leaves properties in an uninitialized state", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar;\n    public function __get($name) {\n        var_dump($name);\n        /* return value has to be compatible with int */\n        return 0;\n    }\n}\n$foo = new Foo();\nunset($foo->bar);\nvar_dump($foo->bar);\n?>")).toMatchSnapshot();
  });
});
