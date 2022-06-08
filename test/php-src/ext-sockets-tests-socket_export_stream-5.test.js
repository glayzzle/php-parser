// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_export_stream-5.phpt
  it("socket_export_stream: effects of leaked handles", function () {
    expect(parser.parseCode("<?php\n$sock0 = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);\nsocket_bind($sock0, '0.0.0.0', 0);\n$stream0 = socket_export_stream($sock0);\nzend_leak_variable($stream0);\n$sock1 = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);\nsocket_bind($sock1, '0.0.0.0', 0);\n$stream1 = socket_export_stream($sock1);\nzend_leak_variable($sock1);\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
