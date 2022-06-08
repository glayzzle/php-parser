// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_getopt.phpt
  it("mixed socket_getopt( resource $socket , int $level , int $optname ) ;", function () {
    expect(parser.parseCode("<?php\n$domain = AF_INET;\n$level = IPPROTO_IP;\n$s = socket_create($domain, SOCK_DGRAM, SOL_UDP) or die(\"err\");\necho \"Setting IP_MULTICAST_TTL\\n\";\n$r = socket_set_option($s, $level, IP_MULTICAST_TTL, 9);\nvar_dump($r);\n$r = socket_getopt($s, $level, IP_MULTICAST_TTL);\nvar_dump($r);\necho \"\\n\";\necho \"Setting IP_MULTICAST_LOOP\\n\";\n$r = socket_set_option($s, $level, IP_MULTICAST_LOOP, 0);\nvar_dump($r);\n$r = socket_getopt($s, $level, IP_MULTICAST_LOOP);\nvar_dump($r);\n$r = socket_set_option($s, $level, IP_MULTICAST_LOOP, 1);\nvar_dump($r);\n$r = socket_getopt($s, $level, IP_MULTICAST_LOOP);\nvar_dump($r);\necho \"\\n\";\necho \"Setting IP_MULTICAST_IF\\n\";\necho \"interface 0:\\n\";\n$r = socket_set_option($s, $level, IP_MULTICAST_IF, 0);\nvar_dump($r);\n$r = socket_getopt($s, $level, IP_MULTICAST_IF);\nvar_dump($r);\necho \"interface 1:\\n\";\n$r = socket_set_option($s, $level, IP_MULTICAST_IF, 1);\nvar_dump($r);\n$r = socket_getopt($s, $level, IP_MULTICAST_IF);\nvar_dump($r);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
