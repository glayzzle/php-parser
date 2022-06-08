// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/ipv4loop.phpt
  it("IPv4 Loopback test", function () {
    expect(parser.parseCode("<?php\n    /* Setup socket server */\n    $server = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n    if (!$server) {\n        die('Unable to create AF_INET socket [server]');\n    }\n    if (!socket_bind($server, '127.0.0.1', 0)) {\n        die(\"Unable to bind to 127.0.0.1\");\n    }\n    if (!socket_listen($server, 2)) {\n        die('Unable to listen on socket');\n    }\n    socket_getsockname($server, $unused, $port);\n    /* Connect to it */\n    $client = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n    if (!$client) {\n        die('Unable to create AF_INET socket [client]');\n    }\n    if (!socket_connect($client, '127.0.0.1', $port)) {\n        die('Unable to connect to server socket');\n    }\n    /* Accept that connection */\n    $socket = socket_accept($server);\n    if (!$socket) {\n        die('Unable to accept connection');\n    }\n    socket_write($client, \"ABCdef123\\n\");\n    $data = socket_read($socket, 10, PHP_BINARY_READ);\n    var_dump($data);\n    socket_close($client);\n    socket_close($socket);\n    socket_close($server);\n?>")).toMatchSnapshot();
  });
});
