// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug75535.phpt
  it("Bug #75535: Inappropriately parsing HTTP response leads to PHP segment fault", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$responses = array(\n    \"data://text/plain,HTTP/1.0 200 Ok\\r\\nContent-Length\\r\\n\",\n);\n['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\nvar_dump(file_get_contents($uri));\nvar_dump($http_response_header);\nhttp_server_kill($pid);")).toMatchSnapshot();
  });
});
