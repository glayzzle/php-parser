// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug69579.phpt
  it("Bug #69579 (Internal trait double-free)", function () {
    expect(parser.parseCode("<?php\nclass Bar{\n  use _ZendTestTrait;\n}\n$bar = new Bar();\nvar_dump($bar->testMethod());\n// destruction causes a double-free and explodes\n?>")).toMatchSnapshot();
  });
});
