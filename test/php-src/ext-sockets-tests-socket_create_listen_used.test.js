// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_create_listen_used.phpt
  it("ext/sockets - socket_create_listen - test for used socket", function () {
    expect(parser.parseCode("<?php\n$s_c_l = socket_create_listen(0);\nvar_dump($s_c_l);\nsocket_getsockname($s_c_l, $addr, $port);\n$s_c_l2 = socket_create_listen($port);\nvar_dump($s_c_l2);\nsocket_close($s_c_l);\n?>")).toMatchSnapshot();
  });
});
