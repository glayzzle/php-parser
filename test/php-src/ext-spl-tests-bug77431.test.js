// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug77431.phpt
  it("Bug #77431 (SplFileInfo::__construct() accepts NUL bytes)", function () {
    expect(parser.parseCode("<?php\nnew SplFileInfo(\"bad\\0good\");\n?>")).toMatchSnapshot();
  });
});
