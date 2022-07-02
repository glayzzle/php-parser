// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/016.phpt
  it("Fully qualified classes are allowed in return types", function () {
    expect(parser.parseCode("<?php\nnamespace Collections;\nclass Foo {\n    function foo(\\Iterator $i): \\Iterator {\n        return $i;\n    }\n}\n$foo = new Foo;\nvar_dump($foo->foo(new \\EmptyIterator()));\n?>")).toMatchSnapshot();
  });
});
