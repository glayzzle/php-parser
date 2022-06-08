// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug65634.phpt
  it("Bug #65634 (HTTP wrapper is very slow with protocol_version 1.1)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\nfunction do_test($version, $connection) {\n    $options = [\n        'http' => [\n            'protocol_version' => $version,\n        ],\n    ];\n    if ($connection) {\n        $options['http']['header'] = \"Connection: $connection\";\n    }\n    $ctx = stream_context_create($options);\n    $responses = [\"data://text/plain,HTTP/$version 204 No Content\\r\\n\\r\\n\"];\n    ['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\n    $fd = fopen($uri, 'rb', false, $ctx);\n    fseek($output, 0, SEEK_SET);\n    echo stream_get_contents($output);\n    http_server_kill($pid);\n}\necho \"HTTP/1.0, default behaviour:\\n\";\ndo_test('1.0', null);\necho \"HTTP/1.0, connection: close:\\n\";\ndo_test('1.0', 'close');\necho \"HTTP/1.0, connection: keep-alive:\\n\";\ndo_test('1.0', 'keep-alive');\necho \"HTTP/1.1, default behaviour:\\n\";\ndo_test('1.1', null);\necho \"HTTP/1.1, connection: close:\\n\";\ndo_test('1.1', 'close');\necho \"HTTP/1.1, connection: keep-alive:\\n\";\ndo_test('1.1', 'keep-alive');")).toMatchSnapshot();
  });
});
