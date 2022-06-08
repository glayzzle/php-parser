// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_export_stream-3.phpt
  it("socket_export_stream: Test with multicasting", function () {
    expect(parser.parseCode("<?php\n$sock = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);\nsocket_bind($sock, '0.0.0.0', 0);\nsocket_getsockname($sock, $unused, $port);\n$stream = socket_export_stream($sock);\nvar_dump($stream);\n$so = socket_set_option($sock, IPPROTO_IP, MCAST_JOIN_GROUP, array(\n    \"group\"\t=> '224.0.0.23',\n    \"interface\" => \"lo\",\n));\nvar_dump($so);\n$sendsock = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);\nvar_dump($sendsock);\n$br = socket_bind($sendsock, '127.0.0.1');\n$so = socket_sendto($sendsock, $m = \"my message\", strlen($m), 0, \"224.0.0.23\", $port);\nvar_dump($so);\nstream_set_blocking($stream, 0);\nvar_dump(fread($stream, strlen($m)));\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
