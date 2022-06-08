// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug74764.phpt
  it("Bug #74764 IPv6 bindto fails with stream_socket_client()", function () {
    expect(parser.parseCode("<?php\n$context = stream_context_create(\n    ['socket' => array('bindto' => \"[::]:0\")]\n    );\n    $socket = stream_socket_client('tcp://localhost:1443', $errno, $errstr, 5, STREAM_CLIENT_CONNECT, $context);\n$context = stream_context_create(\n    array('socket' => array('bindto' => \"0.0.0.0:0\"))\n    );\n    $socket = stream_socket_client('tcp://localhost:1443', $errno, $errstr, 5, STREAM_CLIENT_CONNECT, $context);\n?>")).toMatchSnapshot();
  });
});
