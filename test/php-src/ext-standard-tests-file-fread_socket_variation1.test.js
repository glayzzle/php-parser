// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fread_socket_variation1.phpt
  it("Testing fread() on a TCP server socket", function () {
    expect(parser.parseCode("<?php\nfor ($i=0; $i<100; $i++) {\n  $port = rand(10000, 65000);\n  /* Setup socket server */\n  $server = @stream_socket_server(\"tcp://127.0.0.1:$port\");\n  if ($server) {\n    break;\n  }\n}\nsocket_set_timeout($server, 0, 1000);\nvar_dump(fread($server, 1));\nfclose($server);\n?>")).toMatchSnapshot();
  });
});
