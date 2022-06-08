// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/globals_004.phpt
  it("globals in local scope - 3", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    include __DIR__.\"/globals.inc\";\n}\ntest();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
