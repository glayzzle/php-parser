// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/017.phpt
  it("Fully qualified classes in trait return types", function () {
    expect(parser.parseCode("<?php\nnamespace FooSpace;\ntrait Fooable {\n    function foo(): \\Iterator {\n        return new \\EmptyIterator();\n    }\n}\nclass Foo {\n    use Fooable;\n}\n$foo = new Foo;\nvar_dump($foo->foo([]));\n?>")).toMatchSnapshot();
  });
});
