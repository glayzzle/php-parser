// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/mcast_ipv6_send.phpt
  it("Multicast support: IPv6 send options", function () {
    expect(parser.parseCode("<?php\n$domain = AF_INET6;\n$level = IPPROTO_IPV6;\n$s = socket_create($domain, SOCK_DGRAM, SOL_UDP) or die(\"err\");\necho \"Setting IPV6_MULTICAST_TTL\\n\";\n$r = socket_set_option($s, $level, IPV6_MULTICAST_HOPS, 9);\nvar_dump($r);\n$r = socket_get_option($s, $level, IPV6_MULTICAST_HOPS);\nvar_dump($r);\necho \"\\n\";\necho \"Setting IPV6_MULTICAST_LOOP\\n\";\n$r = socket_set_option($s, $level, IPV6_MULTICAST_LOOP, 0);\nvar_dump($r);\n$r = socket_get_option($s, $level, IPV6_MULTICAST_LOOP);\nvar_dump($r);\n$r = socket_set_option($s, $level, IPV6_MULTICAST_LOOP, 1);\nvar_dump($r);\n$r = socket_get_option($s, $level, IPV6_MULTICAST_LOOP);\nvar_dump($r);\necho \"\\n\";\necho \"Setting IPV6_MULTICAST_IF\\n\";\necho \"interface 0:\\n\";\n$r = socket_set_option($s, $level, IPV6_MULTICAST_IF, 0);\nvar_dump($r);\n$r = socket_get_option($s, $level, IPV6_MULTICAST_IF);\nvar_dump($r);\necho \"interface 1:\\n\";\n$r = socket_set_option($s, $level, IPV6_MULTICAST_IF, 1);\nvar_dump($r);\n$r = socket_get_option($s, $level, IPV6_MULTICAST_IF);\nvar_dump($r);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
