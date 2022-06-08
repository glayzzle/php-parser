// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/016.phpt
  it("isset() with object properties when operating on non-object", function () {
    expect(parser.parseCode("<?php\n$foo = NULL;\nisset($foo->bar->bar);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
