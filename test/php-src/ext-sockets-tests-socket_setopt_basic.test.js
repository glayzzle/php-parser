// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_setopt_basic.phpt
  it("Test socket_setopt() basic functionality", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\nif (!$socket) {\n    die('Unable to create AF_INET socket [socket]');\n}\nsocket_set_block($socket);\n//set/get comparison\n$options = array(\"sec\" => 1, \"usec\" => 0);\n$retval_1 = socket_setopt( $socket, SOL_SOCKET, SO_SNDTIMEO, $options);\n$retval_2 = socket_getopt( $socket, SOL_SOCKET, SO_SNDTIMEO);\nvar_dump($retval_1);\nvar_dump($retval_2 === $options);\nsocket_close($socket);\n?>")).toMatchSnapshot();
  });
});
