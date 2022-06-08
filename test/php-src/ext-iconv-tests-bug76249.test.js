// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug76249.phpt
  it("Bug #76249 (stream filter convert.iconv leads to infinite loop on invalid sequence)", function () {
    expect(parser.parseCode("<?php\n$fh = fopen('php://memory', 'rw');\nfwrite($fh, \"abc\");\nrewind($fh);\nif (false === @stream_filter_append($fh, 'convert.iconv.ucs-2/utf8//IGNORE', STREAM_FILTER_READ, [])) {\n    stream_filter_append($fh, 'convert.iconv.ucs-2/utf-8//IGNORE', STREAM_FILTER_READ, []);\n}\nvar_dump(stream_get_contents($fh));\n?>\nDONE")).toMatchSnapshot();
  });
});
