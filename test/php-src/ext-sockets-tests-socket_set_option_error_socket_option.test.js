// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_set_option_error_socket_option.phpt
  it("Test if socket_set_option() returns 'Unable to set socket option' failure for invalid options", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\nif (!$socket) {\n        die('Unable to create AF_INET socket [socket]');\n}\nsocket_set_option( $socket, SOL_SOCKET, 1, 1);\nsocket_close($socket);\n?>")).toMatchSnapshot();
  });
});
