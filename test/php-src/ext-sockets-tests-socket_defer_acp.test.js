// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_defer_acp.phpt
  it("Test if socket_set_option() works, option:TCP_DEFER_ACCEPT", function () {
    expect(parser.parseCode("<?php\necho \"*** Test with TCP_DEFER_ACCEPT with initial SYN/ACK 'timeout' value to rounded up one ***\\n\";\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\nif (!$socket) {\n        die('Unable to create AF_INET socket [socket]');\n}\n$initial_val = 5;\nvar_dump(socket_set_option( $socket, SOL_TCP, TCP_DEFER_ACCEPT, $initial_val));\nsocket_listen($socket);\n$rounded_up_val = socket_get_option( $socket, SOL_TCP, TCP_DEFER_ACCEPT);\nsocket_close($socket);\nvar_dump($rounded_up_val > $initial_val); // Value rounded up by the kernel, might differ from kernel version/setting\n?>")).toMatchSnapshot();
  });
});
