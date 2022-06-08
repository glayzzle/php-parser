// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_addrinfo_explain.phpt
  it("Test socket_addrinfo_explain()", function () {
    expect(parser.parseCode("<?php\n$addrinfo = socket_addrinfo_lookup('127.0.0.1', 2000, array(\n    'ai_family' => AF_INET,\n    'ai_socktype' => SOCK_DGRAM,\n));\n$result = socket_addrinfo_explain($addrinfo[0]);\n// Musl sets ai_canonname even if AI_CANONNAME is not specified.\nunset($result['ai_canonname']);\nvar_dump($result);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
