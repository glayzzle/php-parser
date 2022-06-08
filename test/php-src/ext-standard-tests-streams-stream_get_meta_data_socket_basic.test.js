// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_socket_basic.phpt
  it("stream_get_meta_data() on a udp socket", function () {
    expect(parser.parseCode("<?php\n$tcp_socket = stream_socket_server('tcp://127.0.0.1:31330');\nvar_dump(stream_get_meta_data($tcp_socket));\nfclose($tcp_socket);\n?>")).toMatchSnapshot();
  });
});
