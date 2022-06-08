// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_filter_inflate2.phpt
  it("zlib.inflate of gzip-encoded stream", function () {
    expect(parser.parseCode("<?php\n$a = gzopen(__DIR__ . '/test.txt.gz', 'w');\nfwrite($a, \"This is quite the thing ain't it\\n\");\nfclose($a);\n$fp = fopen(__DIR__ . '/test.txt.gz', 'r');\nstream_filter_append($fp, 'zlib.inflate', STREAM_FILTER_READ);\necho fread($fp, 2000);\nfclose($fp);\necho \"1\\n\";\n$fp = fopen(__DIR__ . '/test.txt.gz', 'r');\n// zlib format\n$fp = fopen(__DIR__ . '/test.txt.gz', 'r');\nstream_filter_append($fp, 'zlib.inflate', STREAM_FILTER_READ, array('window' => 15+16));\necho \"2\\n\";\necho fread($fp, 2000);\nfclose($fp);\n// auto-detect\n$fp = fopen(__DIR__ . '/test.txt.gz', 'r');\nstream_filter_append($fp, 'zlib.inflate', STREAM_FILTER_READ, array('window' => 15+32));\necho \"3\\n\";\necho fread($fp, 2000);\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
