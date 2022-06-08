// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/trait_success.phpt
  it("Trait delayed variance check succeeds", function () {
    expect(parser.parseCode("<?php\n// Taken from bug #79179.\nspl_autoload_register(function() {\n    interface InterfaceB extends InterfaceA {}\n});\ninterface InterfaceA {}\ntrait SomeTrait {\n    abstract public function func(): ?InterfaceA;\n}\nclass Foo {\n    public function func(): ?InterfaceB {}\n}\nclass Bar extends Foo {\n    use SomeTrait;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
