// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_literal_separator_001.phpt
  it("Valid use of numeric literal separator", function () {
    expect(parser.parseCode("<?php\nvar_dump(299_792_458 === 299792458);\nvar_dump(135_00 === 13500);\nvar_dump(96_485.332_12 === 96485.33212);\nvar_dump(6.626_070_15e-34 === 6.62607015e-34);\nvar_dump(6.674_083e-11 === 6.674083e-11);\nvar_dump(0xCAFE_F00D === 0xCAFEF00D);\nvar_dump(0x54_4A_42 === 0x544A42);\nvar_dump(0b0101_1111 === 0b01011111);\nvar_dump(0b01_0000_10 === 0b01000010);\nvar_dump(0137_041 === 0137041);\nvar_dump(0_124 === 0124);\n?>")).toMatchSnapshot();
  });
});
