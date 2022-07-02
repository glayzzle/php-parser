// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_socket_variation2.phpt
  it("Testing stream_get_meta_data() \"timed_out\" field on a udp socket", function () {
    expect(parser.parseCode("<?php\n/* Setup socket server */\n$server = stream_socket_server('tcp://127.0.0.1:31332');\n/* Connect to it */\n$client = fsockopen('tcp://127.0.0.1:31332');\nif (!$client) {\n    die(\"Unable to create socket\");\n}\n/* Accept that connection */\n$socket = stream_socket_accept($server);\nvar_dump(stream_get_meta_data($client));\necho \"\\n\\nSet a timeout on the client and attempt a read:\\n\";\nsocket_set_timeout($client, 0, 1000);\nfread($client, 1);\nvar_dump(stream_get_meta_data($client));\necho \"\\n\\nWrite some data from the server:\\n\";\nfwrite($socket, \"12345\");\nvar_dump(stream_get_meta_data($client));\necho \"\\n\\nRead some data from the client:\\n\";\nfread($client, 5);\nvar_dump(stream_get_meta_data($client));\nfclose($client);\nfclose($socket);\nfclose($server);\n?>")).toMatchSnapshot();
  });
});
