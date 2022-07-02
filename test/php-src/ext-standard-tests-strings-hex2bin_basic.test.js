// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/hex2bin_basic.phpt
  it("hex2bin(); function test", function () {
    expect(parser.parseCode("<?php\nvar_dump(bin2hex(hex2bin('012345')) == '012345');\nvar_dump(bin2hex(hex2bin('abc123')) == 'abc123');\nvar_dump(bin2hex(hex2bin('123abc')) == '123abc');\nvar_dump(bin2hex(hex2bin('FFFFFF')) == 'ffffff');\n?>")).toMatchSnapshot();
  });
});
