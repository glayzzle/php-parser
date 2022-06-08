// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/ob_002.phpt
  it("zlib.output_compression", function () {
    expect(parser.parseCode("<?php\nini_set(\"zlib.output_compression\", 0);\necho \"hi\\n\";\n?>")).toMatchSnapshot();
  });
});
