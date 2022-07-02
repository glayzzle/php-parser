// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/unixloop.phpt
  it("Streams Based Unix Domain Loopback test", function () {
    expect(parser.parseCode("<?php\n    $uniqid = uniqid();\n    if (file_exists(\"/tmp/$uniqid.sock\"))\n        die('Temporary socket already exists.');\n    /* Setup socket server */\n    $server = stream_socket_server(\"unix:///tmp/$uniqid.sock\");\n    if (!$server) {\n        die('Unable to create AF_UNIX socket [server]');\n    }\n    /* Connect to it */\n    $client = stream_socket_client(\"unix:///tmp/$uniqid.sock\");\n    if (!$client) {\n        die('Unable to create AF_UNIX socket [client]');\n    }\n    /* Accept that connection */\n    $socket = stream_socket_accept($server);\n    if (!$socket) {\n        die('Unable to accept connection');\n    }\n    fwrite($client, \"ABCdef123\\n\");\n    $data = fread($socket, 10);\n    var_dump($data);\n    fclose($client);\n    fclose($socket);\n    fclose($server);\n    unlink(\"/tmp/$uniqid.sock\");\n?>")).toMatchSnapshot();
  });
});
