// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/001.phpt
  it("Strlen() function test", function () {
    expect(parser.parseCode("<?php echo strlen(\"abcdef\")?>")).toMatchSnapshot();
  });
});
