// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug76342.phpt
  it("Bug #76342 (file_get_contents waits twice specified timeout)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$timeout = 0.5;\n$options = [\n  'http' => [\n    'timeout' => $timeout,\n  ],\n];\n$ctx = stream_context_create($options);\n['pid' => $pid, 'uri' => $uri] = http_server_sleep();\n$start = microtime(true);\nfile_get_contents($uri, false, $ctx);\n$diff = microtime(true) - $start;\nif ($diff >= 2 * $timeout) {\n    echo \"FAIL: $diff\\n\";\n}\nhttp_server_kill($pid);\n?>\nDONE")).toMatchSnapshot();
  });
});
