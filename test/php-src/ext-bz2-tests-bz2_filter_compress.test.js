// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/bz2_filter_compress.phpt
  it("bzip2.compress (with convert.base64-encode)", function () {
    expect(parser.parseCode("<?php\n$text = 'I am the very model of a modern major general, I\\'ve information vegetable, animal, and mineral.';\n$fp = fopen('php://stdout', 'w');\nstream_filter_append($fp, 'bzip2.compress', STREAM_FILTER_WRITE);\nstream_filter_append($fp, 'convert.base64-encode', STREAM_FILTER_WRITE);\nfwrite($fp, $text);\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
