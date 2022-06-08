// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_export_stream-1.phpt
  it("socket_export_stream: Basic test", function () {
    expect(parser.parseCode("<?php\n$domain = (strtoupper(substr(PHP_OS, 0, 3) == 'WIN') ? AF_INET : AF_UNIX);\nsocket_create_pair($domain, SOCK_STREAM, 0, $s);\n$s0 = reset($s);\n$s1 = next($s);\n$stream = socket_export_stream($s0);\nvar_dump($stream);\nsocket_write($s1, \"test message\");\nsocket_close($s1);\nvar_dump(stream_get_contents($stream));\n?>")).toMatchSnapshot();
  });
});
