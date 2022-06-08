// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_addrinfo_connect.phpt
  it("Test socket_addrinfo_connect()", function () {
    expect(parser.parseCode("<?php\n$addrinfo = socket_addrinfo_lookup('127.0.0.1', 2000, array(\n    'ai_family' => AF_INET,\n    'ai_socktype' => SOCK_DGRAM,\n));\nvar_dump(socket_addrinfo_connect($addrinfo[0]));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
