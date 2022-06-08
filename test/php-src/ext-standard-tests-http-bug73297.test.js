// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug73297.phpt
  it("Bug #73297 (Ignore 100 Continue returned by HTTP/1.1 servers)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$options = [\n  'http' => [\n    'protocol_version' => '1.1',\n    'header' => 'Connection: Close'\n  ],\n];\n$ctx = stream_context_create($options);\n$responses = [\n  \"data://text/plain,HTTP/1.1 100 Continue\\r\\n\\r\\nHTTP/1.1 200 OK\\r\\n\\r\\n\"\n    . \"Hello\"\n];\n['pid' => $pid, 'uri' => $uri] = http_server($responses);\necho file_get_contents($uri, false, $ctx);\necho \"\\n\";\nhttp_server_kill($pid);")).toMatchSnapshot();
  });
});
