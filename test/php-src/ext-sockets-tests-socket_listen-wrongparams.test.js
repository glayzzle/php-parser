// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_listen-wrongparams.phpt
  it("Test parameter handling in socket_listen().", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_UNIX, SOCK_STREAM, 0);\nvar_dump(socket_listen($socket));\n?>")).toMatchSnapshot();
  });
});
