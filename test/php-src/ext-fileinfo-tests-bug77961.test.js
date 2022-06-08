// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug77961.phpt
  it("Bug #77961 (finfo_open crafted magic parsing SIGABRT)", function () {
    expect(parser.parseCode("<?php\nfinfo_open(FILEINFO_NONE, __DIR__ . '/bug77961.magic');\n?>")).toMatchSnapshot();
  });
});
