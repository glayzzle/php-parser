// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/udp4loop.phpt
  it("Streams Based IPv4 UDP Loopback test", function () {
    expect(parser.parseCode("<?php\n    /* Setup socket server */\n    for ($port = 31338; $port < 31500; ++$port) {\n      $uri = \"udp://127.0.0.1:$port\";\n      $server = @stream_socket_server($uri, $errno, $errstr, STREAM_SERVER_BIND);\n      if ($server) break;\n    }\n    if (!$server) {\n        die('Unable to create AF_INET socket [server]: ' . $errstr);\n    }\n    /* Connect to it */\n    $client = stream_socket_client($uri);\n    if (!$client) {\n        die('Unable to create AF_INET socket [client]');\n    }\n    fwrite($client, \"ABCdef123\\n\");\n    $data = fread($server, 10);\n    var_dump($data);\n    fclose($client);\n    fclose($server);\n?>")).toMatchSnapshot();
  });
});
