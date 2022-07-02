// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug75981.phpt
  it("Bug #75981 (stack-buffer-overflow while parsing HTTP response)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$options = [\n  'http' => [\n    'protocol_version' => '1.1',\n    'header' => 'Connection: Close'\n  ],\n];\n$ctx = stream_context_create($options);\n$responses = [\n    \"data://text/plain,000000000100\\xA\\xA\"\n];\n['pid' => $pid, 'uri' => $uri] = http_server($responses);\necho @file_get_contents($uri, false, $ctx);\nhttp_server_kill($pid);\n?>\nDONE")).toMatchSnapshot();
  });
});
