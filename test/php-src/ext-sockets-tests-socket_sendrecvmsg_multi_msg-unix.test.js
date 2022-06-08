// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_sendrecvmsg_multi_msg-unix.phpt
  it("sendmsg()/recvmsg(): test ability to receive multiple messages", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__.\"/mcast_helpers.php.inc\";\n$addr = '::1';\necho \"creating send socket\\n\";\n$sends1 = socket_create(AF_INET6, SOCK_DGRAM, SOL_UDP) or die(\"err\");\nvar_dump($sends1);\n$br = socket_bind($sends1, '::', 7002) or die(\"err\");\nvar_dump($br);\nsocket_set_nonblock($sends1) or die(\"Could not put in non-blocking mode\");\necho \"creating receive socket\\n\";\n$s = socket_create(AF_INET6, SOCK_DGRAM, SOL_UDP) or die(\"err\");\nvar_dump($s);\n$br = socket_bind($s, '::0', 3002) or die(\"err\");\nvar_dump($br);\nsocket_set_option($s, IPPROTO_IPV6, IPV6_RECVPKTINFO, 1) or die(\"err\");\nsocket_set_option($s, IPPROTO_IPV6, IPV6_RECVTCLASS, 1) or die(\"err\");\n$r = socket_sendmsg($sends1, [\n    \"name\" => [ \"addr\" => \"::1\", \"port\" => 3002],\n    \"iov\" => [\"test \", \"thing\", \"\\n\"],\n    \"control\" => [[\n        \"level\" => IPPROTO_IPV6,\n        \"type\" => IPV6_TCLASS,\n        \"data\" => 40,\n    ]]\n], 0);\nvar_dump($r);\nchecktimeout($s, 500);\n$data = [\n    \"name\" => [\"family\" => AF_INET6, \"addr\" => \"::1\"],\n    \"buffer_size\" => 2000,\n    \"controllen\" => socket_cmsg_space(IPPROTO_IPV6, IPV6_PKTINFO) +\n            socket_cmsg_space(IPPROTO_IPV6, IPV6_TCLASS),\n];\nif (!socket_recvmsg($s, $data, 0)) die(\"recvmsg\");\nprint_r($data);\n?>")).toMatchSnapshot();
  });
});
