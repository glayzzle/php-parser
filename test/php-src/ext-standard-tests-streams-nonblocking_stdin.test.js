// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/nonblocking_stdin.phpt
  it("Read from non-blocking stdio stream should not error", function () {
    expect(parser.parseCode("<?php\nstream_set_blocking(STDIN, false);\nvar_dump(fread(STDIN, 1));\n?>")).toMatchSnapshot();
  });
});
