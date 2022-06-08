// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/ob_001.phpt
  it("zlib.output_compression", function () {
    expect(parser.parseCode("<?php\necho \"hi\\n\";\n?>")).toMatchSnapshot();
  });
});
