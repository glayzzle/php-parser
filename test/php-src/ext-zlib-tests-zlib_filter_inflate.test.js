// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_filter_inflate.phpt
  it("zlib.inflate (with convert.base64-decode)", function () {
    expect(parser.parseCode("<?php\n$text = 'HctBDoAgDETRq8zOjfEeHKOGATG0TRpC4u1Vdn/xX4IoxkVMxgP1zA4vkJVhULk9UGkM6TvSNolmxUNlNLePVQ45O3eINf0fsQxtCxwv';\n$fp = fopen('php://stdout', 'w');\nstream_filter_append($fp, 'convert.base64-decode', STREAM_FILTER_WRITE);\nstream_filter_append($fp, 'zlib.inflate', STREAM_FILTER_WRITE);\nfwrite($fp, $text);\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
