// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_clear_error-win32.phpt
  it("void socket_clear_error ([ resource $socket ] ) ;", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\n$socketConn = socket_connect($socket, \"127.0.0.1\", 21248);\nvar_dump(socket_last_error($socket));\nsocket_clear_error($socket);\nvar_dump(socket_last_error($socket));\n?>")).toMatchSnapshot();
  });
});
