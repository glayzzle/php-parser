// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/bug63000.phpt
  it("Bug #63000: Multicast on OSX", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);\nsocket_bind($socket, '0.0.0.0', 31057);\n$so = socket_set_option($socket, IPPROTO_IP, MCAST_JOIN_GROUP, array(\n    \"group\" => '224.0.0.251',\n    \"interface\" => 0,\n));\nvar_dump($so);\n?>")).toMatchSnapshot();
  });
});
