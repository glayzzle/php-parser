// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/req44164.phpt
  it("Req #44164 (Handle \"Content-Length\" HTTP header when zlib.output_compression active)", function () {
    expect(parser.parseCode("<?php\nheader(\"Content-length: 200\");\necho str_repeat(\"a\", 200);\n?>")).toMatchSnapshot();
  });
});
