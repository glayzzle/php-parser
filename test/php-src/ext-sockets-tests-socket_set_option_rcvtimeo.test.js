// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_set_option_rcvtimeo.phpt
  it("Test if socket_set_option() works, option:SO_RCVTIMEO", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\nif (!$socket) {\n        die('Unable to create AF_INET socket [socket]');\n}\nsocket_set_block($socket);\n//wrong params\ntry {\n    $retval_1 = socket_set_option($socket, SOL_SOCKET, SO_RCVTIMEO, []);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n//set/get comparison\n$options = array(\"sec\" => 1, \"usec\" => 0);\n$retval_2 = socket_set_option( $socket, SOL_SOCKET, SO_RCVTIMEO, $options);\n$retval_3 = socket_get_option( $socket, SOL_SOCKET, SO_RCVTIMEO);\nvar_dump($retval_2);\nvar_dump($retval_3 === $options);\nsocket_close($socket);\n?>")).toMatchSnapshot();
  });
});
