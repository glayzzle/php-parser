// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_030.phpt
  it("Test typed properties unset __get magical magic", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar;\n    public function __get($name) {\n        return \"violate\";\n    }\n}\n$foo = new Foo;\n$foo->bar = \"1\"; # ok\nunset($foo->bar); # ok\nvar_dump($foo->bar); # not okay, __get is nasty\n?>")).toMatchSnapshot();
  });
});
