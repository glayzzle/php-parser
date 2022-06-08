// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/bug51958.phpt
  it("Bug #51958: socket_accept() fails on IPv6 server sockets", function () {
    expect(parser.parseCode("<?php\n$listenfd = socket_create(AF_INET6, SOCK_STREAM, SOL_TCP);\nsocket_bind($listenfd, \"::1\", 13579);\nsocket_listen($listenfd);\nsocket_set_nonblock($listenfd);\n$connfd = @socket_accept($listenfd);\necho socket_last_error();\n?>")).toMatchSnapshot();
  });
});
