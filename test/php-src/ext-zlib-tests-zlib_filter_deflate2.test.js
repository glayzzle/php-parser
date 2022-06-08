// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_filter_deflate2.phpt
  it("zlib.deflate (with level parameter set)", function () {
    expect(parser.parseCode("<?php\n$text = 'I am the very model of a modern major general, I\\'ve information vegetable, animal, and mineral.';\n$fp = fopen('php://stdout', 'w');\nstream_filter_append($fp, 'zlib.deflate', STREAM_FILTER_WRITE, array('level' => 9));\nfwrite($fp, $text);\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
