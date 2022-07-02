// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/sapi_windows_vt100_support_winko_in-out.phpt
  it("Test sapi_windows_vt100_support on older Windows versions with redirected STDIN/STDOUT", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/sapi_windows_vt100_support.inc';\ntestToStdOut();\n?>")).toMatchSnapshot();
  });
});
