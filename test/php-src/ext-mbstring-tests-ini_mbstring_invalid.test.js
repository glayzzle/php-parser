// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/ini_mbstring_invalid.phpt
  it("Invalid values for MBString INI settings", function () {
    expect(parser.parseCode("<?php\n// Empty as we are only testing INI settings\n?>")).toMatchSnapshot();
  });
});
