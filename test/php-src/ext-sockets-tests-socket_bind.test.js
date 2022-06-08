// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_bind.phpt
  it("ext/sockets - socket_bind - basic test", function () {
    expect(parser.parseCode("<?php\n    $s_c     = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n    $s_bind  = socket_bind($s_c, '0.0.0.0');\n    var_dump($s_bind);\n    // Connect to destination address\n    $s_conn  = socket_connect($s_c, 'www.php.net', 80);\n    var_dump($s_conn);\n    // Write\n    $request = 'GET / HTTP/1.1' . \"\\r\\n\";\n    $s_write = socket_write($s_c, $request);\n    var_dump($s_write);\n    // Close\n    $s_close = socket_close($s_c);\n    var_dump($s_close);\n?>")).toMatchSnapshot();
  });
});
