// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug81294.phpt
  it("Bug #81294 (Segfault when removing a filter)", function () {
    expect(parser.parseCode("<?php\n$f = fopen(__DIR__ . \"/bug81294.txt\", \"wb+\");\n$flt1 = stream_filter_append($f, \"zlib.deflate\", STREAM_FILTER_WRITE);\n$flt2 = stream_filter_append($f, \"string.rot13\", STREAM_FILTER_WRITE);\nfwrite($f, \"test\");\nstream_filter_remove($flt1);\nfwrite($f, \"test\");\nstream_filter_remove($flt2);\nrewind($f);\nvar_dump(urlencode(fread($f, 1024)));\n?>")).toMatchSnapshot();
  });
});
