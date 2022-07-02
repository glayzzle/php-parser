// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_socket_get_name.phpt
  it("string stream_socket_get_name ( resource $handle , bool $want_peer ) ;", function () {
    expect(parser.parseCode("<?php\n$serverUri = \"tcp://127.0.0.1:31855\";\n$sock = stream_socket_server($serverUri, $errno, $errstr);\nvar_dump(stream_socket_get_name($sock, false));\nvar_dump(stream_socket_get_name($sock, true));\n?>")).toMatchSnapshot();
  });
});
