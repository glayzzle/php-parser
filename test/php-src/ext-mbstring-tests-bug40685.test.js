// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug40685.phpt
  it("Bug #40685 (mb_decode_numericentity() removes '&' in the string)", function () {
    expect(parser.parseCode("<?php\n$map = array(0, 0x10FFFF, 0, 0xFFFFFF);\nvar_dump(mb_decode_numericentity('&', $map, 'UTF-8'));\nvar_dump(mb_decode_numericentity('&&&', $map, 'UTF-8'));\nvar_dump(mb_decode_numericentity('&#', $map, 'UTF-8'));\nvar_dump(mb_decode_numericentity('&#x', $map, 'UTF-8'));\nvar_dump(mb_decode_numericentity('&#61', $map, 'UTF-8'));\nvar_dump(mb_decode_numericentity('&#x3d', $map, 'UTF-8'));\nvar_dump(mb_decode_numericentity('&#61;', $map, 'UTF-8'));\nvar_dump(mb_decode_numericentity('&#x3d;', $map, 'UTF-8'));\n?>")).toMatchSnapshot();
  });
});
