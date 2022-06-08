// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug79467.phpt
  it("Bug #79467 (data:// wrappers are writable)", function () {
    expect(parser.parseCode("<?php\nvar_dump(file_put_contents('data://text/plain,cccc', 'data'));\n?>")).toMatchSnapshot();
  });
});
