// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/stream_isatty_in-out-err.phpt
  it("Test stream_isatty with redirected STDIN/STDOUT/STDERR", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/stream_isatty.inc';\ntestToStdOut();\n?>")).toMatchSnapshot();
  });
});
