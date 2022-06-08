// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bin2hex_001.phpt
  it("bin2hex(); function test", function () {
    expect(parser.parseCode("<?php\necho bin2hex(\"123456\");\n?>")).toMatchSnapshot();
  });
});
