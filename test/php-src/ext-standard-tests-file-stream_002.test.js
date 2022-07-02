// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stream_002.phpt
  it("stream_socket_client() and invalid arguments", function () {
    expect(parser.parseCode("<?php\n$a = NULL;\n$b = NULL;\nvar_dump(stream_socket_client(\"\", $a, $b));\nvar_dump($a, $b);\nvar_dump(stream_socket_client(\"[\", $a, $b));\nvar_dump($a, $b);\nvar_dump(stream_socket_client(\"[ \", $a, $b));\nvar_dump($a, $b);\nvar_dump(stream_socket_client(\".\", $a, $b));\nvar_dump($a, $b);\nvar_dump(stream_socket_client(1, $a, $b));\nvar_dump($a, $b);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
