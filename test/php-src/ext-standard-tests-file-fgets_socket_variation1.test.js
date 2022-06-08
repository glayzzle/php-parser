// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgets_socket_variation1.phpt
  it("fgets() with a socket stream", function () {
    expect(parser.parseCode("<?php\nfor ($i=0; $i<100; $i++) {\n  $port = rand(10000, 65000);\n  /* Setup socket server */\n  $server = @stream_socket_server(\"tcp://127.0.0.1:$port\");\n  if ($server) {\n    break;\n  }\n}\n/* Connect to it */\n$client = fsockopen(\"tcp://127.0.0.1:$port\");\nif (!$client) {\n    die(\"Unable to create socket\");\n}\n/* Accept that connection */\n$socket = stream_socket_accept($server);\necho \"Write some data:\\n\";\nfwrite($socket, \"line1\\nline2\\nline3\\n\");\necho \"\\n\\nRead a line from the client:\\n\";\nvar_dump(fgets($client));\necho \"\\n\\nRead another line from the client:\\n\";\nvar_dump(fgets($client));\necho \"\\n\\nClose the server side socket and read the remaining data from the client\\n\";\nfclose($socket);\nfclose($server);\nwhile(!feof($client)) {\n    fread($client, 1);\n}\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
