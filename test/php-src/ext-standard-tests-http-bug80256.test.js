// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/http/bug80256.phpt
  it("Bug #80256: file_get_contents strip first line with chunked encoding redirect", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$responses = array(\n    \"data://text/plain,HTTP/1.1 302 Moved Temporarily\\r\\n\"\n    . \"Location: /try-again\\r\\n\"\n    . \"Transfer-Encoding: chunked\\r\\n\\r\\n\"\n    . \"0\\r\\n\\r\\n\",\n    \"data://text/plain,HTTP/1.1 200 Ok\\r\\n\"\n    . \"Transfer-Encoding: chunked\\r\\n\\r\\n\"\n    . \"4\\r\\n1234\\r\\n0\\r\\n\\r\\n\",\n);\n['pid' => $pid, 'uri' => $uri] = http_server($responses, $output);\nvar_dump(file_get_contents($uri));\nhttp_server_kill($pid);\n?>")).toMatchSnapshot();
  });
});
