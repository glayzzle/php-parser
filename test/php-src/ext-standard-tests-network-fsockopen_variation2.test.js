// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/fsockopen_variation2.phpt
  it("testing fsockopen() with udp sockets", function () {
    expect(parser.parseCode("<?php\n$hostname = 'udp://127.0.0.1';\n$port = '31337';\necho \"Open a server socket\\n\";\n$server = stream_socket_server($hostname . ':' . $port, $errno, $errstr, STREAM_SERVER_BIND);\necho \"\\nCalling fsockopen():\\n\";\n$client = fsockopen($hostname, $port);\nvar_dump($client);\necho \"\\nPass some data between the sockets:\\n\";\nfwrite($client, \"0123456789\");\nvar_dump(fread($server, 10));\nfclose($client);\necho \"\\nCalling fsockopen() with address and port in same string:\\n\";\n$address = $hostname . ':' . $port;\n$second_client = fsockopen($address);\nvar_dump($second_client);\necho \"\\nPass some data between the sockets:\\n\";\nfwrite($second_client, \"0123456789\");\nvar_dump(fread($server, 10));\nfclose($second_client);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
