// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug74556.phpt
  it("Bug #74556 stream_socket_get_name() on unix socket returns \"\\0\"", function () {
    expect(parser.parseCode("<?php\n$sock = tempnam(sys_get_temp_dir(), 'bug74556') . '.sock';\n$s = stream_socket_server(\"unix://$sock\");\n$c = stream_socket_client(\"unix://$sock\");\nvar_dump(\n    stream_socket_get_name($s, true),\n    stream_socket_get_name($c, false)\n);\nunlink($sock);\n?>")).toMatchSnapshot();
  });
});
