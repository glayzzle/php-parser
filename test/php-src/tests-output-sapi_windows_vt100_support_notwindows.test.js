// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/sapi_windows_vt100_support_notwindows.phpt
  it("Test that sapi_windows_vt100_support exists only on Windows", function () {
    expect(parser.parseCode("<?php\nvar_dump(function_exists('sapi_windows_vt100_support'));\n?>")).toMatchSnapshot();
  });
});
