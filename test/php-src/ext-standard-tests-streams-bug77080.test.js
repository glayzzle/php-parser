// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug77080.phpt
  it("Bug #77080 (Deflate not working)", function () {
    expect(parser.parseCode("<?php\n$string = str_repeat(\"0123456789\", 100);\n$stream = fopen('data://text/plain,' . $string,'r');\nstream_filter_append($stream, 'zlib.deflate', STREAM_FILTER_READ, 6);\n$compressed = stream_get_contents($stream);\nvar_dump(gzinflate($compressed) === $string);\n?>")).toMatchSnapshot();
  });
});
