// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_getpeername_ipv4loop.phpt
  it("ext/sockets - socket_getpeername_ipv4loop - basic test", function () {
    expect(parser.parseCode("<?php\n    /* Bind and connect sockets to localhost */\n    $localhost = '127.0.0.1';\n        /* Setup socket server */\n        $server = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n        if (!$server) {\n                die('Unable to create AF_INET socket [server]');\n        }\n    $minport = 31337;\n    $maxport = 31356;\n    $bound = false;\n    for($port = $minport; $port <= $maxport; ++$port) {\n        if (@socket_bind($server, $localhost, $port)) {\n            $bound = true;\n            break;\n        }\n    }\n    if (!$bound) {\n                die('Unable to bind to '.$localhost);\n        }\n        if (!socket_listen($server, 2)) {\n                die('Unable to listen on socket');\n        }\n        /* Connect to it */\n        $client = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n        if (!$client) {\n                die('Unable to create AF_INET socket [client]');\n        }\n        if (!socket_connect($client, $localhost, $port)) {\n                die('Unable to connect to server socket');\n        }\n        /* Accept that connection */\n        $socket = socket_accept($server);\n        if (!$socket) {\n                die('Unable to accept connection');\n        }\n    if (!socket_getpeername($client, $address, $peerport)) {\n        die('Unable to retrieve peer name');\n    }\n        var_dump($address, $port === $peerport);\n        socket_close($client);\n        socket_close($socket);\n        socket_close($server);\n?>")).toMatchSnapshot();
  });
});
