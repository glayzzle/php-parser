// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_context_tcp_nodelay_fopen.phpt
  it("stream context tcp_nodelay fopen", function () {
    expect(parser.parseCode("<?php\n$ctxt = stream_context_create([\n    \"socket\" => [\n        \"tcp_nodelay\" => true\n    ],\n    \"http\" => [\n        \"follow_location\" => 0\n    ]\n]);\n$stream = fopen(\"http://www.php.net\", \"r\", false,  $ctxt);\n$socket =\n    @socket_import_stream($stream);\nvar_dump(socket_get_option($socket, STREAM_IPPROTO_TCP, TCP_NODELAY) > 0);\n?>")).toMatchSnapshot();
  });
});
