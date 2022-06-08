// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/opendir-001.phpt
  it("opendir() with 'ftp://' stream.", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . \"/../../../ftp/tests/server.inc\";\n$path=\"ftp://localhost:\" . $port.\"/bogusdir\";\nvar_dump(opendir($path));\n?>")).toMatchSnapshot();
  });
});
