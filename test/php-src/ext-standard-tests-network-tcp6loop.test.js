// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/tcp6loop.phpt
  it("Streams Based IPv6 TCP Loopback test", function () {
    expect(parser.parseCode("<?php\n  for ($i=0; $i<100; $i++) {\n    $port = rand(10000, 65000);\n    /* Setup socket server */\n    $server = @stream_socket_server(\"tcp://[::1]:$port\");\n    if ($server) {\n      break;\n    }\n  }\n    if (!$server) {\n        die('Unable to create AF_INET6 socket [server]');\n    }\n    /* Connect to it */\n    $client = stream_socket_client(\"tcp://[::1]:$port\");\n    if (!$client) {\n        die('Unable to create AF_INET6 socket [client]');\n    }\n    /* Accept that connection */\n    $socket = stream_socket_accept($server);\n    if (!$socket) {\n        die('Unable to accept connection');\n    }\n    fwrite($client, \"ABCdef123\\n\");\n    $data = fread($socket, 10);\n    var_dump($data);\n    fclose($client);\n    fclose($socket);\n    fclose($server);\n?>")).toMatchSnapshot();
  });
});
