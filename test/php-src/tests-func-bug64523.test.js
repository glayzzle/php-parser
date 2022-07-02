// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/bug64523.phpt
  it("Bug #64523: XOR not parsed in INI", function () {
    expect(parser.parseCode("<?php\necho ini_get('error_reporting');\n?>")).toMatchSnapshot();
  });
});
