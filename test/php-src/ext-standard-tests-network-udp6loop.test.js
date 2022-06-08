// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/udp6loop.phpt
  it("Streams Based IPv6 UDP Loopback test", function () {
    expect(parser.parseCode("<?php\n  for ($i=0; $i<100; $i++) {\n    $port = rand(10000, 65000);\n    /* Setup socket server */\n    $server = @stream_socket_server(\"udp://[::1]:$port\", $errno, $errstr, STREAM_SERVER_BIND);\n    if ($server) {\n      break;\n    }\n  }\n    if (!$server) {\n        die('Unable to create AF_INET6 socket [server]');\n    }\n    /* Connect to it */\n    $client = stream_socket_client(\"udp://[::1]:$port\");\n    if (!$client) {\n        die('Unable to create AF_INET6 socket [client]');\n    }\n    fwrite($client, \"ABCdef123\\n\");\n    $data = fread($server, 10);\n    var_dump($data);\n    fclose($client);\n    fclose($server);\n?>")).toMatchSnapshot();
  });
});
