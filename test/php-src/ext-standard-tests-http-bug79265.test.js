// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug79265.phpt
  it("Bug #79265 (Improper injection of Host header when using fopen for http requests)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$responses = array(\n    \"data://text/plain,HTTP/1.1 200 OK\\r\\n\\r\\n\",\n);\n['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\n$opts = array(\n  'http'=>array(\n    'method'=>\"GET\",\n    'header'=>\"RandomHeader: localhost:8080\\r\\n\" .\n              \"Cookie: foo=bar\\r\\n\" .\n              \"Host: userspecifiedvalue\\r\\n\"\n  )\n);\n$context = stream_context_create($opts);\n$fd = fopen($uri, 'rb', false, $context);\nfseek($output, 0, SEEK_SET);\necho stream_get_contents($output);\nfclose($fd);\nhttp_server_kill($pid);")).toMatchSnapshot();
  });
});
