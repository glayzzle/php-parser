// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_set_option_acf.phpt
  it("Test if socket_set_option() works, option:SO_ACCEPTFILTER", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\nif (!$socket) {\n        die('Unable to create AF_INET socket [socket]');\n}\ntry {\n\tvar_dump(socket_set_option( $socket, SOL_SOCKET, SO_ACCEPTFILTER, 1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nsocket_listen($socket);\nvar_dump(socket_set_option( $socket, SOL_SOCKET, SO_ACCEPTFILTER, \"httpready\"));\nvar_dump(socket_get_option( $socket, SOL_SOCKET, SO_ACCEPTFILTER));\nsocket_close($socket);\n?>")).toMatchSnapshot();
  });
});
