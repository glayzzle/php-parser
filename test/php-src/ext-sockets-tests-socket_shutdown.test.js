// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_shutdown.phpt
  it("bool socket_shutdown ( resource $socket [, int $how = 2 ] ) ;", function () {
    expect(parser.parseCode("<?php\n$host = \"yahoo.com\";\n$port = 80;\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n$socketConn = socket_connect($socket, $host, $port);\nvar_dump(socket_shutdown($socket,0));\nsocket_close($socket);\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n$socketConn = socket_connect($socket, $host, $port);\nvar_dump(socket_shutdown($socket,1));\nsocket_close($socket);\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n$socketConn = socket_connect($socket, $host, $port);\nvar_dump(socket_shutdown($socket,2));\nsocket_close($socket);\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\nvar_dump(socket_shutdown($socket,0));\n$socketConn = socket_connect($socket, $host, $port);\nvar_dump(socket_shutdown($socket,-1));\nsocket_close($socket);\n?>")).toMatchSnapshot();
  });
});
