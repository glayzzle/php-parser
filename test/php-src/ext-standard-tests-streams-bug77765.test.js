// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug77765.phpt
  it("stat() on directory should return 40755 for ftp://", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . \"/../../../ftp/tests/server.inc\";\n$path = \"ftp://localhost:\" . $port.\"/www\";\nvar_dump(stat($path)['mode']);\n?>")).toMatchSnapshot();
  });
});
