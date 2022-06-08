// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_getsockname.phpt
  it("ext/sockets - socket_getsockname - basic test", function () {
    expect(parser.parseCode("<?php\n    $s_c     = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n    $s_bind  = socket_bind($s_c, '0.0.0.0');\n    var_dump($s_bind);\n    // Connect to destination address\n    $s_conn  = socket_getsockname($s_c, $ip, $port);\n    var_dump($s_conn);\n    var_dump($ip);\n    var_dump($port);\n    socket_close($s_c);\n?>")).toMatchSnapshot();
  });
});
