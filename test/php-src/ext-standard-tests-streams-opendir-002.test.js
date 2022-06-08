// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/opendir-002.phpt
  it("opendir() with 'ftp://' stream.", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . \"/../../../ftp/tests/server.inc\";\n$path=\"ftp://localhost:\" . $port.\"/\";\n$ds=opendir($path);\nvar_dump($ds);\nwhile ($fn=readdir($ds)) {\n      var_dump($fn);\n}\nclosedir($ds);\n?>")).toMatchSnapshot();
  });
});
