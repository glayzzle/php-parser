// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_060.phpt
  it("Test typed properties work fine with simple inheritance", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public int $a = 1;\n}\nclass B extends A {}\n$o = new B;\nvar_dump($o->a);\n$o->a = \"a\";\n?>")).toMatchSnapshot();
  });
});
