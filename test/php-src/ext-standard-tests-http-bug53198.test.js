// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug53198.phpt
  it("Bug #53198 (From: header cannot be changed with ini_set)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\nfunction do_test() {\n    $responses = array(\n        \"data://text/plain,HTTP/1.1 200 OK\\r\\n\\r\\n\",\n    );\n    ['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\n    foreach($responses as $r) {\n        $fd = fopen($uri, 'rb', false);\n        fseek($output, 0, SEEK_SET);\n        var_dump(stream_get_contents($output));\n        fseek($output, 0, SEEK_SET);\n    }\n    http_server_kill($pid);\n}\necho \"-- Test: leave default --\\n\";\ndo_test();\necho \"-- Test: after ini_set --\\n\";\nini_set('from', 'junk@junk.com');\ndo_test();\n?>")).toMatchSnapshot();
  });
});
