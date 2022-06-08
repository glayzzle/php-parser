// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sapi_windows_cp_conv.phpt
  it("sapi_windows_cp_conv basic functionality", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    bin2hex(sapi_windows_cp_conv(65001, 1252, 'äöü')),\n    bin2hex(sapi_windows_cp_conv('utf-8', 1252, 'äöü')),\n    bin2hex(sapi_windows_cp_conv(65001, 'windows-1252', 'äöü')),\n    bin2hex(sapi_windows_cp_conv('utf-8', 'windows-1252', 'äöü')),\n);\n?>")).toMatchSnapshot();
  });
});
