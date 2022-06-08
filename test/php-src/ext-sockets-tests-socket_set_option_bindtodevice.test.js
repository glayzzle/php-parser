// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_set_option_bindtodevice.phpt
  it("Test if socket_set_option() works, option:SO_BINDTODEVICE", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\nif (!$socket) {\n        die('Unable to create AF_INET socket [socket]');\n}\n// wrong params\n$retval_1 = socket_set_option( $socket, SOL_SOCKET, SO_BINDTODEVICE, \"lo\");\nvar_dump($retval_1);\n$retval_2 = socket_set_option( $socket, SOL_SOCKET, SO_BINDTODEVICE, \"ethIDONOTEXIST\");\nvar_dump($retval_2);\nsocket_close($socket);\n?>")).toMatchSnapshot();
  });
});
