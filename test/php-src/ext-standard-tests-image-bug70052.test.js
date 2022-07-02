// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/bug70052.phpt
  it("Bug #70052 (getimagesize() fails for very large and very small WBMP)", function () {
    expect(parser.parseCode("<?php\nvar_dump(getimagesize(__DIR__ . '/bug70052_1.wbmp'));\nvar_dump(getimagesize(__DIR__ . '/bug70052_2.wbmp'));\n?>")).toMatchSnapshot();
  });
});
