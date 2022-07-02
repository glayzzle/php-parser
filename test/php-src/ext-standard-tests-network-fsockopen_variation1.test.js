// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/fsockopen_variation1.phpt
  it("testing fsockopen without a protocol string", function () {
    expect(parser.parseCode("<?php\necho \"Open a server socket\\n\";\nfor ($i=0; $i<100; $i++) {\n  $port = rand(10000, 65000);\n  /* Setup socket server */\n  $server = @stream_socket_server(\"tcp://127.0.0.1:$port\");\n  if ($server) {\n    break;\n  }\n}\necho \"\\nCalling fsockopen() without a protocol in the hostname string:\\n\";\n$hostname = '127.0.0.1';\n$client = fsockopen($hostname, $port);\nvar_dump($client);\nfclose($client);\necho \"\\nCalling fsockopen() with address and port in same string, without a protocol:\\n\";\n$address = $hostname . ':' . $port;\n$second_client = fsockopen($address);\nvar_dump($second_client);\nfclose($second_client);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
