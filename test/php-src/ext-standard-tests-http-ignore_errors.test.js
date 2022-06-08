// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/ignore_errors.phpt
  it("http:// and ignore_errors", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\nfunction do_test($context_options) {\n    $context = stream_context_create(array('http' => $context_options));\n    $responses = array(\n        \"data://text/plain,HTTP/1.1 200 Ok\\r\\nX-Foo: bar\\r\\n\\r\\n1\",\n        \"data://text/plain,HTTP/1.1 404 Not found\\r\\nX-bar: baz\\r\\n\\r\\n2\",\n    );\n    ['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\n    foreach($responses as $r) {\n        $fd = fopen(\"$uri/foo/bar\", 'rb', false, $context);\n        var_dump($fd);\n        if ($fd) {\n            $meta_data = stream_get_meta_data($fd);\n            var_dump($meta_data['wrapper_data']);\n            var_dump(stream_get_contents($fd));\n        }\n        fseek($output, 0, SEEK_SET);\n        var_dump(stream_get_contents($output));\n        fseek($output, 0, SEEK_SET);\n    }\n    http_server_kill($pid);\n}\necho \"-- Test: requests without ignore_errors --\\n\";\ndo_test(array());\necho \"-- Test: requests with ignore_errors --\\n\";\ndo_test(array('ignore_errors' => true));\necho \"-- Test: requests with ignore_errors (2) --\\n\";\ndo_test(array('ignore_errors' => 1));\n?>")).toMatchSnapshot();
  });
});
