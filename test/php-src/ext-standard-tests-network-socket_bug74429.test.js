// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/socket_bug74429.phpt
  it("Bug #74429 Remote socket URI with unique persistence identifier broken", function () {
    expect(parser.parseCode("<?php\n/* This behavior is undocumented, but might be in use. Until there's no officially\n    supported alternative, ensure changes doesn't cause BC breach. Otherwise,\n    the test should be removed once the undocumented behavior changes. */\nfor ($i=0; $i<100; $i++) {\n  $port = rand(10000, 65000);\n  /* Setup socket server */\n  $server = @stream_socket_server(\"tcp://127.0.0.1:$port\");\n  if ($server) {\n    break;\n  }\n}\n$client0 = stream_socket_client(\"tcp://127.0.0.1:$port/client0\");\n$client1 = stream_socket_client(\"tcp://127.0.0.1:$port/client1\");\nvar_dump($client0, $client1);\nfclose($server);\nfclose($client0);\nfclose($client1);\n?>")).toMatchSnapshot();
  });
});
