// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_abstract_path_sendmsg.phpt
  it("Support for paths in the abstract namespace (bind, sendmsg, recvmsg)", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__.\"/mcast_helpers.php.inc\";\n$path = \"\\x00/bar_foo\";\necho \"creating send socket\\n\";\n$sends1 = socket_create(AF_UNIX, SOCK_DGRAM, 0) or die(\"err\");\nsocket_set_nonblock($sends1) or die(\"Could not put in non-blocking mode\");\necho \"creating receive socket\\n\";\n$s = socket_create(AF_UNIX, SOCK_DGRAM, 0) or die(\"err\");\nsocket_bind($s, $path) or die(\"err\");\n$r = socket_sendmsg($sends1, [\n    \"name\" => [ \"path\" => $path],\n    \"iov\" => [\"test \", \"thing\", \"\\n\"],\n], 0);\nvar_dump($r);\nchecktimeout($s, 500);\nif (!socket_recv($s, $buf, 20, 0)) die(\"recv\");\nprint_r($buf);\n?>")).toMatchSnapshot();
  });
});
