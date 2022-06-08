// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug64330.phpt
  it("Bug #64330 (stream_socket_server() creates wrong Abstract Namespace UNIX sockets)", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\n$server = stream_socket_server(\"unix://\\x00/MyBindName\");\n$client = stream_socket_client(\"unix://\\x00/MyBindName\");\nif ($client) {\n    echo \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
