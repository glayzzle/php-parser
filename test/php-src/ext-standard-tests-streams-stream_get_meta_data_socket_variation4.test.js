// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_socket_variation4.phpt
  it("Testing stream_get_meta_data() \"eof\" field on a udp socket", function () {
    expect(parser.parseCode("<?php\n/* Setup socket server */\n$server = stream_socket_server('tcp://127.0.0.1:31334');\n/* Connect to it */\n$client = fsockopen('tcp://127.0.0.1:31334');\nif (!$client) {\n    die(\"Unable to create socket\");\n}\n/* Accept that connection */\n$socket = stream_socket_accept($server);\necho \"Write some data:\\n\";\nfwrite($socket, \"abcdefg\\n1234567\\nxyzxyz\\n\");\nvar_dump(stream_get_meta_data($client));\necho \"\\n\\nRead a line from the client:\\n\";\nfgets($client);\nvar_dump(stream_get_meta_data($client));\necho \"\\n\\nClose the server side socket and read the remaining data from the client:\\n\";\nfclose($socket);\nfclose($server);\nwhile(!feof($client)) {\n    fread($client, 1);\n}\nvar_dump(stream_get_meta_data($client));\nfclose($client);\n?>")).toMatchSnapshot();
  });
});
