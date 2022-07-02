// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/http_response_header_04.phpt
  it("$http_reponse_header (header with trailing whitespace)", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$responses = array(\n    \"data://text/plain,HTTP/1.0 200 Ok\\r\\nSome:   Header   \\r\\n\\r\\nBody\",\n);\n['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\n$f = file_get_contents($uri);\nvar_dump($f);\nvar_dump($http_response_header);\nhttp_server_kill($pid);")).toMatchSnapshot();
  });
});
