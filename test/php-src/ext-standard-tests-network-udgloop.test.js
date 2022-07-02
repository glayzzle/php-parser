// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/udgloop.phpt
  it("Streams Based Unix Domain Datagram Loopback test", function () {
    expect(parser.parseCode("<?php\n    $uniqid = uniqid();\n    if (file_exists(\"/tmp/$uniqid.sock\"))\n        die('Temporary socket /tmp/$uniqid.sock already exists.');\n    /* Setup socket server */\n    $server = stream_socket_server(\"udg:///tmp/$uniqid.sock\", $errno, $errstr, STREAM_SERVER_BIND);\n    if (!$server) {\n        die('Unable to create AF_UNIX socket [server]');\n    }\n    /* Connect to it */\n    $client = stream_socket_client(\"udg:///tmp/$uniqid.sock\");\n    if (!$client) {\n        die('Unable to create AF_UNIX socket [client]');\n    }\n    fwrite($client, \"ABCdef123\\n\");\n    $data = fread($server, 10);\n    var_dump($data);\n    fclose($client);\n    fclose($server);\n    unlink(\"/tmp/$uniqid.sock\");\n?>")).toMatchSnapshot();
  });
});
