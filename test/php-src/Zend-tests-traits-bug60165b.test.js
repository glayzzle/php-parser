// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug60165b.phpt
  it("Bug #60165 (Aliasing unexisting trait should throw/trigger the exception/error)", function () {
    expect(parser.parseCode("<?php\ntrait A {\n    public function bar() {}\n}\nclass MyClass {\n    use A {\n        A::nonExistent as barA;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
