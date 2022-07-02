// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_socket_pair.phpt
  it("stream_socket_pair()", function () {
    expect(parser.parseCode("<?php\n$domain = (strtoupper(substr(PHP_OS, 0, 3) == 'WIN') ? STREAM_PF_INET : STREAM_PF_UNIX);\n$sockets = stream_socket_pair($domain, STREAM_SOCK_STREAM, 0);\nvar_dump($sockets);\nfwrite($sockets[0], \"foo\");\nvar_dump(fread($sockets[1], strlen(\"foo\")));\nfclose($sockets[0]);\n?>")).toMatchSnapshot();
  });
});
