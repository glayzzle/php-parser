// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug47997.phpt
  it("Bug #47997 (stream_copy_to_stream returns 1 on empty streams)", function () {
    expect(parser.parseCode("<?php\n$in = fopen('data://text/plain,', 'rb+');\n$out = fopen('php://memory', 'wb+');\nvar_dump(stream_copy_to_stream($in, $out));\n?>")).toMatchSnapshot();
  });
});
