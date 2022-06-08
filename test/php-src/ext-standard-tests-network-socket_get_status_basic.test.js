// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/socket_get_status_basic.phpt
  it("Testing socket_get_status()", function () {
    expect(parser.parseCode("<?php\nfor ($i=0; $i<100; $i++) {\n  $port = rand(10000, 65000);\n  /* Setup socket server */\n  $server = @stream_socket_server(\"tcp://127.0.0.1:$port\");\n  if ($server) {\n    break;\n  }\n}\nvar_dump(socket_get_status($server));\nfclose($server);\n?>")).toMatchSnapshot();
  });
});
