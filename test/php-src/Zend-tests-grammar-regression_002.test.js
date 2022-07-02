// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_002.phpt
  it("Test to ensure ::class still works", function () {
    expect(parser.parseCode("<?php\nclass Foo {}\nvar_dump(Foo::class);\nvar_dump(Foo:: class);\nvar_dump(Foo::\t CLASS);\nvar_dump(Foo::\nCLASS);\n?>")).toMatchSnapshot();
  });
});
