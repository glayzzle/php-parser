// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug68996.phpt
  it("Bug #68996 (Invalid free of CG(interned_empty_string))", function () {
    expect(parser.parseCode("<?php\nfinfo_open(FILEINFO_MIME_TYPE, \"\\xfc\\x63\");\n?>")).toMatchSnapshot();
  });
});
