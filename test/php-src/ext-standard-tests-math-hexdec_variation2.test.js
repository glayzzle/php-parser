// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/hexdec_variation2.phpt
  it("Test hexdec() function : strange literals", function () {
    expect(parser.parseCode("<?php\nvar_dump(hexdec('0x'));\nvar_dump(hexdec('0X'));\nvar_dump(hexdec(''));\n?>")).toMatchSnapshot();
  });
});
