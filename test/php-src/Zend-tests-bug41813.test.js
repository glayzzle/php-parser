// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41813.phpt
  it("Bug #41813 (segmentation fault when using string offset as an object)", function () {
    expect(parser.parseCode("<?php\n$foo = \"50\";\n$foo[0]->bar = \"xyz\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
