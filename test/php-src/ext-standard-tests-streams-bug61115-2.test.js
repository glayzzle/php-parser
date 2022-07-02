// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug61115-2.phpt
  it("Bug #61115: Stream related segfault on fatal error in php_stream_context_del_link - variation 2", function () {
    expect(parser.parseCode("<?php\nstream_socket_client('abc', $var, $var, 0, STREAM_CLIENT_PERSISTENT);\n?>\n==DONE==")).toMatchSnapshot();
  });
});
