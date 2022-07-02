// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug61548.phpt
  it("Bug #61548 (content-type must appear at the end of headers)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\nfunction do_test($header) {\n    $options = [\n        'http' => [\n            'method' => 'POST',\n            'header' => $header,\n            'follow_location' => true,\n        ],\n    ];\n    $ctx = stream_context_create($options);\n    $responses = [\n        \"data://text/plain,HTTP/1.1 201\\r\\nLocation: /foo\\r\\n\\r\\n\",\n        \"data://text/plain,HTTP/1.1 200\\r\\nConnection: close\\r\\n\\r\\n\",\n    ];\n    ['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\n    $fd = fopen($uri, 'rb', false, $ctx);\n    fseek($output, 0, SEEK_SET);\n    echo stream_get_contents($output);\n    http_server_kill($pid);\n}\ndo_test(\"First:1\\nSecond:2\\nContent-type: text/plain\");\ndo_test(\"First:1\\nSecond:2\\nContent-type: text/plain\\n\");\ndo_test(\"First:1\\nSecond:2\\nContent-type: text/plain\\nThird:\");\ndo_test(\"First:1\\nContent-type:text/plain\\nSecond:2\");\ndo_test(\"First:1\\nContent-type:text/plain\\nSecond:2\\n\");\ndo_test(\"First:1\\nContent-type:text/plain\\nSecond:2\\nThird:\");\n?>\nDone")).toMatchSnapshot();
  });
});
