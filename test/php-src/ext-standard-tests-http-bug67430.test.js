// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug67430.phpt
  it("Bug #67430 (http:// wrapper doesn't follow 308 redirects)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\nfunction do_test($follow) {\n  $options = [\n    'http' => [\n      'method' => 'POST',\n      'follow_location' => $follow,\n    ],\n  ];\n  $ctx = stream_context_create($options);\n  $responses = [\n    \"data://text/plain,HTTP/1.1 308\\r\\nLocation: /foo\\r\\n\\r\\n\",\n    \"data://text/plain,HTTP/1.1 200\\r\\nConnection: close\\r\\n\\r\\n\",\n  ];\n  ['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\n  $fd = fopen($uri, 'rb', false, $ctx);\n  fseek($output, 0, SEEK_SET);\n  echo stream_get_contents($output);\n  http_server_kill($pid);\n}\ndo_test(true);\ndo_test(false);\n?>\nDone")).toMatchSnapshot();
  });
});
