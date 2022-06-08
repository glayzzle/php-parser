// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bindto.phpt
  it("Test invalid bindto", function () {
    expect(parser.parseCode("<?php\n$ctx = stream_context_create([\n    'socket' => [\n        'bindto' => 'invalid',\n    ],\n]);\n$fp = stream_socket_client(\n    'tcp://www.' . str_repeat('x', 100) . '.com:80',\n    $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $ctx\n);\n?>")).toMatchSnapshot();
  });
});
