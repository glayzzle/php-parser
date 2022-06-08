// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/wsaprotocol_info_0.phpt
  it("Winsock export/import socket, basic test", function () {
    expect(parser.parseCode("<?php\n    $address = 'localhost';\n    $port = 10000;\n    if (($sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP)) === false) {\n        fprintf(STDERR, \"socket_create() failed: reason: \" . socket_strerror(socket_last_error()) . \"\\n\");\n    }\n    if (socket_bind($sock, $address, $port) === false) {\n        fprintf(STDERR, \"socket_bind() failed: reason: \" . socket_strerror(socket_last_error($sock)) . \"\\n\");\n    }\n    if (socket_listen($sock, 5) === false) {\n        fprintf(STDERR, \"socket_listen() failed: reason: \" . socket_strerror(socket_last_error($sock)) . \"\\n\");\n    }\n    /* Duplicate socket in the same process. */\n    $pid = getmypid();\n    $info = socket_wsaprotocol_info_export($sock, $pid);\n    $sock2 = socket_wsaprotocol_info_import($info);\n    var_dump(socket_wsaprotocol_info_release($info));\n    var_dump($sock, $sock2);\n    /* Close duplicated socket, the original is still valid. */\n    socket_close($sock2);\n    var_dump($sock, $sock2);\n    /* Using invalid PID. */\n    $info = socket_wsaprotocol_info_export($sock, 123412341);\n    socket_close($sock);\n    /* Importing with invalid identifier. */\n    $sock2 = socket_wsaprotocol_info_import(\"garbage\");\n?>")).toMatchSnapshot();
  });
});
