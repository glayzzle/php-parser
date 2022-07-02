// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/011.phpt
  it("Test bitwise AND, OR, XOR, NOT and logical NOT in INI via error_reporting", function () {
    expect(parser.parseCode("<?php\necho ini_get('error_reporting');\n?>")).toMatchSnapshot();
  });
});
