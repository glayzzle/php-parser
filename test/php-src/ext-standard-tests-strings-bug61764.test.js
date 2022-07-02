// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug61764.phpt
  it("Bug #61764: 'I' unpacks n as signed if n > 2^31-1 on LP64", function () {
    expect(parser.parseCode("<?php\n//expected -30000 mod 2^32 = 4294937296, and not -30000\n//because we can represent 4294937296 with our PHP int type\nprint_r(unpack('I', pack('L', -30000)));\n?>")).toMatchSnapshot();
  });
});
