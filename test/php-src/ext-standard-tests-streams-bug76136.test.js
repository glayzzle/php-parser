// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug76136.phpt
  it("Bug #76136: stream_socket_get_name should enclose IPv6 in brackets", function () {
    expect(parser.parseCode("<?php\n$server = stream_socket_server(\"tcp://[::1]:1337/\");\necho stream_socket_get_name($server, false).PHP_EOL;\n$server = stream_socket_server(\"tcp://127.0.0.1:1337/\");\necho stream_socket_get_name($server, false);\n?>")).toMatchSnapshot();
  });
});
