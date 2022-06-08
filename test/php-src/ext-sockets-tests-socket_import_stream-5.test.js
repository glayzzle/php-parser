// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_import_stream-5.phpt
  it("socket_import_stream: effects of leaked handles", function () {
    expect(parser.parseCode("<?php\n$stream0 = stream_socket_server(\"udp://0.0.0.0:0\", $errno, $errstr, STREAM_SERVER_BIND);\n$sock0 = socket_import_stream($stream0);\nzend_leak_variable($stream0);\n$stream1 = stream_socket_server(\"udp://0.0.0.0:0\", $errno, $errstr, STREAM_SERVER_BIND);\n$sock1 = socket_import_stream($stream1);\nzend_leak_variable($sock1);\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
