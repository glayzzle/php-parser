// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/unixloop.phpt
  it("Unix domain socket Loopback test", function () {
    expect(parser.parseCode("<?php\n    $sock_path = sprintf(\"/tmp/%s.sock\", uniqid());\n    if (file_exists($sock_path))\n        die('Temporary socket already exists.');\n    /* Setup socket server */\n    $server = socket_create(AF_UNIX, SOCK_STREAM, 0);\n    if (!$server) {\n        die('Unable to create AF_UNIX socket [server]');\n    }\n    if (!socket_bind($server,  $sock_path)) {\n        die(\"Unable to bind to $sock_path\");\n    }\n    if (!socket_listen($server, 2)) {\n        die('Unable to listen on socket');\n    }\n    /* Connect to it */\n    $client = socket_create(AF_UNIX, SOCK_STREAM, 0);\n    if (!$client) {\n        die('Unable to create AF_UNIX socket [client]');\n    }\n    if (!socket_connect($client, $sock_path)) {\n        die('Unable to connect to server socket');\n    }\n    /* Accept that connection */\n    $socket = socket_accept($server);\n    if (!$socket) {\n        die('Unable to accept connection');\n    }\n    socket_write($client, \"ABCdef123\\n\");\n    $data = socket_read($socket, 10, PHP_BINARY_READ);\n    var_dump($data);\n    socket_close($client);\n    socket_close($socket);\n    socket_close($server);\n    @unlink($sock_path);\n?>")).toMatchSnapshot();
  });
});
