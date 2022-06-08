// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug60570.phpt
  it("Bug #60570 (Stream context leaks when http request fails)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\nfunction do_test() {\n    $responses = array(\n        \"data://text/plain,HTTP/1.0 404 Not Found\\r\\n\\r\\n\",\n        \"data://text/plain,HTTP/1.0 404 Not Found\\r\\n\\r\\n\",\n        \"data://text/plain,HTTP/1.0 404 Not Found\\r\\n\\r\\n\"\n    );\n    ['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\n    $a = $b = count(get_resources());\n    $i = 3;\n    while ($i--) {\n        $context = stream_context_create(array('http'=>array('timeout'=>1)));\n        file_get_contents($uri, 0, $context);\n        unset($context);\n        $b = $a;\n        $a = count(get_resources());\n    }\n    http_server_kill($pid);\n    echo \"leak? penultimate iteration: $b, last one: $a\\n\";\n    var_dump($a == $b);\n}\ndo_test();\n?>")).toMatchSnapshot();
  });
});
