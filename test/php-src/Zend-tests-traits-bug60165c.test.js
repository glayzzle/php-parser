// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug60165c.phpt
  it("Bug #60165 (Aliasing unexisting trait should throw/trigger the exception/error)", function () {
    expect(parser.parseCode("<?php\ntrait A {\n    public function bar() {}\n}\ntrait B {\n    public function foo() {}\n}\nclass MyClass {\n    use A, B {\n        foo as fooB;\n        baz as foobar;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
