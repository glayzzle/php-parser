// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug61115-1.phpt
  it("Bug #61115: Stream related segfault on fatal error in php_stream_context_del_link - variation 1", function () {
    expect(parser.parseCode("<?php\n$fileResourceTemp = fopen('php://temp', 'wr');\nstream_context_get_options($fileResourceTemp);\nftruncate($fileResourceTemp, PHP_INT_MAX);\n?>")).toMatchSnapshot();
  });
});
