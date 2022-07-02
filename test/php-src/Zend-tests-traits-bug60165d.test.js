// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug60165d.phpt
  it("Bug #60165 (Aliasing unexisting trait should throw/trigger the exception/error)", function () {
    expect(parser.parseCode("<?php\n// The same is true for the insteadof operator to resolve conflicts\ntrait A {}\ntrait B {\n    public function bar() {}\n}\nclass MyClass {\n    use A, B {\n        A::bar insteadof B;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
