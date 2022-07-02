// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/fsockopen_basic.phpt
  it("Test fsockopen() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fsockopen() : basic functionality ***\\n\";\necho \"Open a server socket\\n\";\nfor ($i=0; $i<100; $i++) {\n  $port = rand(10000, 65000);\n  /* Setup socket server */\n  $server = @stream_socket_server(\"tcp://127.0.0.1:$port\");\n  if ($server) {\n    break;\n  }\n}\n// Initialise all required variables\n$hostname = 'tcp://127.0.0.1'; // loopback address\n$errno = null;\n$errstr = null;\n$timeout = 1.5;\necho \"\\nCalling fsockopen() with all possible arguments:\\n\";\n$client = fsockopen($hostname, $port, $errno, $errstr, $timeout);\nvar_dump($client);\nfclose($client);\necho \"\\nCalling fsockopen() with mandatory arguments:\\n\";\n$second_client = fsockopen($hostname, $port);\nvar_dump($second_client);\nfclose($second_client);\necho \"\\nCalling fsockopen() with address and port in same string:\\n\";\n$address = $hostname . ':' . $port;\n$third_client = fsockopen($address);\nvar_dump($third_client);\nfclose($third_client);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
