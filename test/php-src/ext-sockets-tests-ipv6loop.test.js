// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/ipv6loop.phpt
  it("IPv6 Loopback test", function () {
    expect(parser.parseCode("<?php\n    /* Setup socket server */\n    $server = socket_create(AF_INET6, SOCK_STREAM, SOL_TCP);\n    if (!$server) {\n        die('Unable to create AF_INET6 socket [server]');\n    }\n    $bound = false;\n    for($port = 31337; $port < 31357; ++$port) {\n        if (@socket_bind($server, '::1', $port)) {\n            $bound = true;\n            break;\n        }\n    }\n    if (!$bound) {\n        die(\"Unable to bind to [::1]:$port\");\n    }\n    if (!socket_listen($server, 2)) {\n        die('Unable to listen on socket');\n    }\n    /* Connect to it */\n    $client = socket_create(AF_INET6, SOCK_STREAM, SOL_TCP);\n    if (!$client) {\n        die('Unable to create AF_INET6 socket [client]');\n    }\n    if (!socket_connect($client, '::1', $port)) {\n        die('Unable to connect to server socket');\n    }\n    /* Accept that connection */\n    $socket = socket_accept($server);\n    if (!$socket) {\n        die('Unable to accept connection');\n    }\n    socket_write($client, \"ABCdef123\\n\");\n    $data = socket_read($socket, 10, PHP_BINARY_READ);\n    var_dump($data);\n    socket_close($client);\n    socket_close($socket);\n    socket_close($server);\n?>")).toMatchSnapshot();
  });
});
