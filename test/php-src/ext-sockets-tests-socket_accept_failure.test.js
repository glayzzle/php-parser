// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_accept_failure.phpt
  it("socket_accept() failure", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\nvar_dump(socket_accept($socket));\n?>")).toMatchSnapshot();
  });
});
