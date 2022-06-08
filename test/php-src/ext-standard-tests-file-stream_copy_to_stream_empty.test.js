// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stream_copy_to_stream_empty.phpt
  it("stream_copy_to_stream() from empty file", function () {
    expect(parser.parseCode("<?php\n$tmp_empty_file = __FILE__ . \".tmp\";\nfile_put_contents($tmp_empty_file, \"\");\n$in = fopen($tmp_empty_file, 'r');\n$out = fopen('php://memory', 'w');\nvar_dump(stream_copy_to_stream($in, $out));\n?>")).toMatchSnapshot();
  });
});
