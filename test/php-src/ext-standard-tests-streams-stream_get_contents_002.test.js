// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_contents_002.phpt
  it("stream_get_contents() - Testing on socket with $maxlength", function () {
    expect(parser.parseCode("<?php\n$sockets = stream_socket_pair(STREAM_PF_UNIX, STREAM_SOCK_STREAM, 0);\nstream_set_timeout($sockets[1], 6000);\nfwrite($sockets[0], \"foo\");\nvar_dump(stream_get_contents($sockets[1], 3));\n?>")).toMatchSnapshot();
  });
});
