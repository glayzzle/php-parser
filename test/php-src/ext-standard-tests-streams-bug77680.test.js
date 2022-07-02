// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug77680.phpt
  it("Recursive mkdir() on ftp should create missing directories.", function () {
    expect(parser.parseCode("<?php\n$bug77680=1;\nrequire __DIR__ . \"/../../../ftp/tests/server.inc\";\n$path = \"ftp://localhost:\" . $port.\"/one/two/three/\";\nmkdir($path, 0755, true);\n?>")).toMatchSnapshot();
  });
});
