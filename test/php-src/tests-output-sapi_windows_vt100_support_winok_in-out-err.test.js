// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/sapi_windows_vt100_support_winok_in-out-err.phpt
  it("Test sapi_windows_vt100_support on newer Windows versions with redirected STDIN/STDOUT/STDERR", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/sapi_windows_vt100_support.inc';\ntestToStdOut();\n?>")).toMatchSnapshot();
  });
});
