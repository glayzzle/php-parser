// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_socket_variation3.phpt
  it("Testing stream_get_meta_data() \"blocked\" field on a udp socket", function () {
    expect(parser.parseCode("<?php\n/* Setup socket server */\n$server = stream_socket_server('tcp://127.0.0.1:31333');\n/* Connect to it */\n$client = fsockopen('tcp://127.0.0.1:31333');\nif (!$client) {\n    die(\"Unable to create socket\");\n}\n/* Accept that connection */\n$socket = stream_socket_accept($server);\nvar_dump(stream_get_meta_data($client));\necho \"\\n\\nSet blocking to false:\\n\";\nvar_dump(socket_set_blocking($client, 0));\nvar_dump(stream_get_meta_data($client));\necho \"\\n\\nSet blocking to true:\\n\";\nvar_dump(socket_set_blocking($client, 1));\nvar_dump(stream_get_meta_data($client));\nfclose($client);\nfclose($socket);\nfclose($server);\n?>")).toMatchSnapshot();
  });
});
