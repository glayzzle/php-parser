// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_socket_recvfrom.phpt
  it("string stream_socket_recvfrom ( resource $socket , int $length [, int $flags = 0 [, string &$address ]] );", function () {
    expect(parser.parseCode("<?php\n$serverUri = \"tcp://127.0.0.1:31856\";\n$sock = stream_socket_server($serverUri, $errno, $errstr);\n$sockLen = 1500;\nvar_dump(stream_socket_recvfrom($sock, $sockLen));\nvar_dump(stream_socket_recvfrom($sock, $sockLen, STREAM_OOB));\nvar_dump(stream_socket_recvfrom($sock, $sockLen, STREAM_PEEK));\n?>")).toMatchSnapshot();
  });
});
