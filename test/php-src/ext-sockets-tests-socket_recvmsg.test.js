// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_recvmsg.phpt
  it("recvmsg(): basic test", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__.\"/mcast_helpers.php.inc\";\n$addr = '::1';\necho \"creating send socket\\n\";\n$sends1 = socket_create(AF_INET6, SOCK_DGRAM, SOL_UDP) or die(\"err\");\nvar_dump($sends1);\n$br = socket_bind($sends1, '::', 7001) or die(\"err\");\nvar_dump($br);\nsocket_set_nonblock($sends1) or die(\"Could not put in non-blocking mode\");\necho \"creating receive socket\\n\";\n$s = socket_create(AF_INET6, SOCK_DGRAM, SOL_UDP) or die(\"err\");\nvar_dump($s);\n$br = socket_bind($s, '::0', 3001) or die(\"err\");\nvar_dump($br);\nsocket_set_option($s, IPPROTO_IPV6, IPV6_RECVPKTINFO, 1) or die(\"err\");\n$r = socket_sendto($sends1, $m = \"testing packet\", strlen($m), 0, $addr, 3001);\nvar_dump($r);\nif ($r < 12) die;\nchecktimeout($s, 500);\n$data = [\n    \"name\" => [\"family\" => AF_INET6, \"addr\" => \"::1\"],\n    \"buffer_size\" => 2000,\n    \"controllen\" => socket_cmsg_space(IPPROTO_IPV6, IPV6_PKTINFO),\n];\nif (!socket_recvmsg($s, $data, 0)) die(\"recvmsg\");\nprint_r($data);\n?>")).toMatchSnapshot();
  });
});
