// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/dir-constant-normal.phpt
  it("Standard behaviour of __DIR__", function () {
    expect(parser.parseCode("<?php\necho __DIR__ . \"\\n\";\necho dirname(__FILE__) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
