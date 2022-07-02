// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/stream_isatty_in-err.phpt
  it("Test stream_isatty with redirected STDIN/STDERR", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/stream_isatty.inc';\ntestToStdErr();\n?>")).toMatchSnapshot();
  });
});
