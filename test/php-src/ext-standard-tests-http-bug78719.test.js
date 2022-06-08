// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug78719.phpt
  it("Bug #78719 (http wrapper silently ignores long Location headers)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$url = str_repeat('*', 2000);\n$responses = array(\n\t\"data://text/plain,HTTP/1.0 302 Ok\\r\\nLocation: $url\\r\\n\\r\\nBody\",\n);\n['pid' => $pid, 'uri' => $uri] = http_server($responses);\n$context = stream_context_create(['http' => ['follow_location' => 0]]);\n$stream = fopen($uri, 'r', false, $context);\nvar_dump(stream_get_contents($stream));\nvar_dump(stream_get_meta_data($stream)['wrapper_data'][1] === \"Location: $url\");\nhttp_server_kill($pid);\n?>")).toMatchSnapshot();
  });
});
