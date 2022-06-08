// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79948.phpt
  it("Bug #79948: Exit in auto-prepended file does not abort PHP execution", function () {
    expect(parser.parseCode("<?php\necho \"Should not be executed.\\n\";\n?>")).toMatchSnapshot();
  });
});
