// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug74090.phpt
  it("Bug #74090 stream_get_contents maxlength>-1 returns empty string on windows", function () {
    expect(parser.parseCode("<?php\n$port = 12327;\n$server = false;\nwhile(!$server && $port < 20000){\n    $port++;\n    $server = stream_socket_server(\"udp://localhost:$port\", $errno, $errstr, STREAM_SERVER_BIND);\n}\nif(!$server){\n    var_dump(false);\n    die(\"Cannot create server socket\");\n}\n$data = base64_decode(\"1oIBAAABAAAAAAAAB2V4YW1wbGUDb3JnAAABAAE=\");\n$fd = stream_socket_client(\"udp://localhost:$port\", $errno, $errstr, 0, STREAM_CLIENT_CONNECT | STREAM_CLIENT_ASYNC_CONNECT);\nstream_set_blocking($fd, 0);\nstream_socket_sendto($fd, $data);\nstream_socket_recvfrom($server, 1, 0, $peer);\nstream_socket_sendto($server, $data, 0, $peer);\n$ret = stream_get_contents($fd, 65565);\nvar_dump(strlen($ret) > 0);\nstream_socket_shutdown($fd, STREAM_SHUT_RDWR);\nstream_socket_shutdown($server, STREAM_SHUT_RDWR);\n?>")).toMatchSnapshot();
  });
});
