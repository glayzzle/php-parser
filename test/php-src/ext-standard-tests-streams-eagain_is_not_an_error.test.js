// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/eagain_is_not_an_error.phpt
  it("EAGAIN/EWOULDBLOCK on a non-blocking socket should not result in an error return value", function () {
    expect(parser.parseCode("<?php\n$sockets = stream_socket_pair(STREAM_PF_UNIX, STREAM_SOCK_STREAM, STREAM_IPPROTO_IP);\nstream_set_blocking($sockets[0], false);\nvar_dump(fread($sockets[0], 100));\n?>")).toMatchSnapshot();
  });
});
