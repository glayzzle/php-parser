// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_030.phpt
  it("030: Name ambiguity (import name & class name)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n}\nuse A\\B as Foo;\nnew Foo();\n?>")).toMatchSnapshot();
  });
});
