// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_import_stream-1.phpt
  it("socket_import_stream: Basic test", function () {
    expect(parser.parseCode("<?php\n$domain = (strtoupper(substr(PHP_OS, 0, 3) == 'WIN') ? STREAM_PF_INET : STREAM_PF_UNIX);\n$s = stream_socket_pair($domain, STREAM_SOCK_STREAM, 0);\n$s0 = reset($s);\n$s1 = next($s);\n$sock = socket_import_stream($s0);\nvar_dump($sock);\nsocket_write($sock, \"test message\");\nsocket_close($sock);\nvar_dump(stream_get_contents($s1));\n?>")).toMatchSnapshot();
  });
});
