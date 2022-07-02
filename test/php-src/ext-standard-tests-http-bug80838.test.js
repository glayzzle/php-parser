// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug80838.phpt
  it("Bug #80838 (HTTP wrapper waits for HTTP 1 response after HTTP 101)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$responses = [\n  \"data://text/plain,HTTP/1.1 101 Switching Protocols\\r\\nHeader1: Value1\\r\\nHeader2: Value2\\r\\n\\r\\n\"\n    . \"Hello from another protocol\"\n];\n['pid' => $pid, 'uri' => $uri] = http_server($responses);\n$options = [\n  'http' => [\n    'ignore_errors' => true\n  ],\n];\n$ctx = stream_context_create($options);\n$fd = fopen($uri, 'rb', false, $ctx);\nfclose($fd);\nvar_dump($http_response_header);\nhttp_server_kill($pid);\n?>")).toMatchSnapshot();
  });
});
