// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_context_tcp_nodelay.phpt
  it("stream context tcp_nodelay", function () {
    expect(parser.parseCode("<?php\n$ctxt = stream_context_create([\n    \"socket\" => [\n        \"tcp_nodelay\" => true\n    ]\n]);\n$stream = stream_socket_client(\n    \"tcp://www.php.net:80\", $errno, $errstr, 10, STREAM_CLIENT_CONNECT, $ctxt);\n$socket =\n    socket_import_stream($stream);\nvar_dump(socket_get_option($socket, SOL_TCP, TCP_NODELAY) > 0);\n?>")).toMatchSnapshot();
  });
});
