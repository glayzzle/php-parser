// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_set_option_in6_pktinfo.phpt
  it("socket_set_option() with IPV6_PKTINFO", function () {
    expect(parser.parseCode("<?php\n$s = socket_create(AF_INET6, SOCK_DGRAM, SOL_UDP) or die(\"err\");\nvar_dump(socket_set_option($s, IPPROTO_IPV6, IPV6_PKTINFO, []));\nvar_dump(socket_set_option($s, IPPROTO_IPV6, IPV6_PKTINFO, [\n    \"addr\" => '::1',\n    \"ifindex\" => 0\n]));\n//Oddly, Linux does not support IPV6_PKTINFO in sockgetopt().\n//See do_ipv6_getsockopt() on the kernel sources\n//A work-around with is sort-of possible (with IPV6_2292PKTOPTIONS),\n//but not worth it\n//var_dump(socket_get_option($s, IPPROTO_IPV6, IPV6_PKTINFO));\n?>")).toMatchSnapshot();
  });
});
