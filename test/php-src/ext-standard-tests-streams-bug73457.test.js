// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug73457.phpt
  it("Bug #73457. Wrong error message when fopen FTP wrapped fails to open data connection", function () {
    expect(parser.parseCode("<?php\n$bug73457=true;\nrequire __DIR__ . \"/../../../ftp/tests/server.inc\";\n$path=\"ftp://127.0.0.1:\" . $port.\"/bug73457\";\n$ds=file_get_contents($path);\nvar_dump($ds);\n?>")).toMatchSnapshot();
  });
});
