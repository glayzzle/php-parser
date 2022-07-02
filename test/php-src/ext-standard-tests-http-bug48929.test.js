// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug48929.phpt
  it("Bug #48929 (duplicate \\r\\n sent after last header line)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\nfunction do_test($context_options) {\n    $context = stream_context_create(array('http' => $context_options));\n    $responses = array(\n        \"data://text/plain,HTTP/1.1 200 OK\\r\\n\\r\\n\",\n    );\n    ['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\n    foreach($responses as $r) {\n        $fd = fopen($uri, 'rb', false, $context);\n        fseek($output, 0, SEEK_SET);\n        var_dump(stream_get_contents($output));\n        fseek($output, 0, SEEK_SET);\n    }\n    http_server_kill($pid);\n}\necho \"-- Test: requests with 'header' as array --\\n\";\ndo_test(array('header' => array('X-Foo: bar', 'Content-Type: text/plain'), 'method' => 'POST', 'content' => 'ohai'));\necho \"-- Test: requests with 'header' as string --\\n\";\ndo_test(array('header' => \"X-Foo: bar\\r\\nContent-Type: text/plain\", 'method' => 'POST', 'content' => 'ohai'));\n?>")).toMatchSnapshot();
  });
});
