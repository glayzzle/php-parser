// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug60455_01.phpt
  it("Bug #60455: stream_get_line and 1-line noeol input", function () {
    expect(parser.parseCode("<?php\n//It's critical the read on the stream returns the input but doesn't set EOF\n//flag the first time. This is why we need to use sockets.\n$domain = (strtoupper(substr(PHP_OS, 0, 3)) == 'WIN' ? STREAM_PF_INET : STREAM_PF_UNIX);\n$sockets = stream_socket_pair($domain, STREAM_SOCK_STREAM, STREAM_IPPROTO_IP)\n        or die(\"stream_socket_pair\");\nfwrite($sockets[0], \"a\");\nstream_socket_shutdown($sockets[0], STREAM_SHUT_RDWR);\n$f = $sockets[1];\nwhile (!feof($f)) {\n    $line = stream_get_line($f, 99, \"\\n\");\n    var_dump($line);\n}\n?>")).toMatchSnapshot();
  });
});
