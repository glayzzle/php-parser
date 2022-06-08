// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/bug81092.phpt
  it("Bug #81092 (fflush before stream_filter_remove corrupts stream)", function () {
    expect(parser.parseCode("<?php\n$stream = fopen(__DIR__ . \"/81092.bz2\", 'wb+');\n$filter = stream_filter_append($stream, 'bzip2.compress', STREAM_FILTER_WRITE, ['blocks' => 9, 'work' => 0]);\nfwrite($stream, random_bytes(8192));\nfflush($stream);\nstream_filter_remove($filter);\nvar_dump(strlen(bzdecompress(file_get_contents(__DIR__ . \"/81092.bz2\"))));\n?>")).toMatchSnapshot();
  });
});
