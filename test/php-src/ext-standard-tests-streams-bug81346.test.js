// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug81346.phpt
  it("Bug #81346 (Non-seekable streams don't update position after write)", function () {
    expect(parser.parseCode("<?php\n$s = fopen(\"compress.bzip2://\" . __DIR__ . \"/bug81346.bz2\", \"w\");\nfwrite($s, str_repeat(\"hello world\", 100));\nfflush($s);\nvar_dump(ftell($s));\n?>")).toMatchSnapshot();
  });
});
