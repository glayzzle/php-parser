// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_clear_error.phpt
  it("void socket_clear_error ([ resource $socket ] ) ;", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\nsocket_set_option($socket, -1, -1, -1);\nvar_dump(socket_last_error($socket));\nsocket_clear_error($socket);\nvar_dump(socket_last_error($socket));\n?>")).toMatchSnapshot();
  });
});
