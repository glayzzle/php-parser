// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug55544-win.phpt
  it("Bug #55544 (ob_gzhandler always conflicts with zlib.output_compression)", function () {
    expect(parser.parseCode("<?php\necho \"hi\";\n?>")).toMatchSnapshot();
  });
});
