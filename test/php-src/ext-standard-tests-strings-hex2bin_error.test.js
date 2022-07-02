// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/hex2bin_error.phpt
  it("hex2bin(); function test", function () {
    expect(parser.parseCode("<?php\nvar_dump(hex2bin('AH'));\nvar_dump(hex2bin('HA'));\n?>")).toMatchSnapshot();
  });
});
