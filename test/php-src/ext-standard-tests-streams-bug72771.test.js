// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug72771.phpt
  it("Bug #72771. FTPS to FTP downgrade not allowed when server doesn't support AUTH TLS or AUTH SSL.", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . \"/../../../ftp/tests/server.inc\";\n$path=\"ftps://127.0.0.1:\" . $port.\"/\";\n$ds=opendir($path, $context);\nvar_dump($ds);\n?>")).toMatchSnapshot();
  });
});
