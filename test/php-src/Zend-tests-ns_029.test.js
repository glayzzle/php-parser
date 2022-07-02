// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_029.phpt
  it("029: Name ambiguity (class name & import name)", function () {
    expect(parser.parseCode("<?php\nuse A\\B as Foo;\nclass Foo {\n}\nnew Foo();\n?>")).toMatchSnapshot();
  });
});
