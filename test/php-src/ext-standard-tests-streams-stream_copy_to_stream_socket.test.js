// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_copy_to_stream_socket.phpt
  it("stream_copy_to_stream() with socket as $source", function () {
    expect(parser.parseCode("<?php\n$sockets = stream_socket_pair(STREAM_PF_UNIX, STREAM_SOCK_STREAM, 0);\n$tmp = tmpfile();\nfwrite($sockets[0], \"a\");\nstream_socket_shutdown($sockets[0], STREAM_SHUT_WR);\nstream_copy_to_stream($sockets[1], $tmp);\nfseek($tmp, 0, SEEK_SET);\nvar_dump(stream_get_contents($tmp));\nstream_copy_to_stream($sockets[1], $tmp);\nfseek($tmp, 0, SEEK_SET);\nvar_dump(stream_get_contents($tmp));\n?>")).toMatchSnapshot();
  });
});
