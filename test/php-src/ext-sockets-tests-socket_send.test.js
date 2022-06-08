// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_send.phpt
  it("int socket_send ( resource $socket , string $buf , int $len , int $flags );", function () {
    expect(parser.parseCode("<?php\n$port = 80;\n$host = \"yahoo.com\";\n$stringSocket = \"send_socket_to_connected_socket\";\n$stringSocketLength = strlen($stringSocket);\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n$socketConn = socket_connect($socket, $host, $port);\nif(socket_send($socket, $stringSocket, $stringSocketLength, MSG_OOB)===$stringSocketLength){\n  print(\"okey\\n\");\n}\nif(!defined('MSG_EOR') || socket_send($socket, $stringSocket, $stringSocketLength, MSG_EOR)===$stringSocketLength){\n  print(\"okey\\n\");\n}\nif(!defined('MSG_EOF') || socket_send($socket, $stringSocket, $stringSocketLength, MSG_EOF)===$stringSocketLength){\n  print(\"okey\\n\");\n}\nif(socket_send($socket, $stringSocket, $stringSocketLength, MSG_DONTROUTE)===$stringSocketLength){\n  print(\"okey\\n\");\n}\n?>\n<?php\nsocket_close($socket);\nunset($port);\nunset($host);\nunset($stringSocket);\nunset($stringSocketLength);\nunset($socket);\nunset($socketConn);\n?>")).toMatchSnapshot();
  });
});
