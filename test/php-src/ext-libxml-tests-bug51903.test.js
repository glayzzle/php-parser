// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/bug51903.phpt
  it("Bug #51903 (simplexml_load_file() doesn't use HTTP headers)", function () {
    expect(parser.parseCode("<?php\nrequire \"./ext/standard/tests/http/server.inc\";\n$responses = [\n    \"data://text/plain,HTTP/1.1 200 OK\\r\\n\"\n    . \"Content-Type: text/xml; charset=ISO-8859-1\\r\\n\\r\\n\"\n    . \"<?xml version=\\\"1.0\\\"?>\\n\"\n    . \"<root>\\xE4\\xF6\\xFC</root>\\n\",\n    \"data://text/plain,HTTP/1.1 200 OK\\r\\n\"\n    . \"Content-Type: text/xml; charset=ISO-8859-1; foo=bar\\r\\n\\r\\n\"\n    . \"<?xml version=\\\"1.0\\\"?>\\n\"\n    . \"<root>\\xE4\\xF6\\xFC</root>\\n\",\n    \"data://text/plain,HTTP/1.1 200 OK\\r\\n\"\n    . \"Content-Type: text/xml; charset=\\\"ISO-8859-1\\\" ; foo=bar\\r\\n\\r\\n\"\n    . \"<?xml version=\\\"1.0\\\"?>\\n\"\n    . \"<root>\\xE4\\xF6\\xFC</root>\\n\",\n];\n['pid' => $pid, 'uri' => $uri] = http_server($responses);\nfor ($i = 0; $i < count($responses); $i++) {\n    $sxe = simplexml_load_file($uri);\n    echo \"$sxe\\n\";\n}\nhttp_server_kill($pid);\n?>")).toMatchSnapshot();
  });
});
