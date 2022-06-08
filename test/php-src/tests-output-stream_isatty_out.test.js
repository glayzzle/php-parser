// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/stream_isatty_out.phpt
  it("Test stream_isatty with redirected STDOUT", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/stream_isatty.inc';\ntestToStdOut();\n?>")).toMatchSnapshot();
  });
});
