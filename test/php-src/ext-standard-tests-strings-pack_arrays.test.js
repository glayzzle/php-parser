// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/pack_arrays.phpt
  it("test unpack() to array with named keys", function () {
    expect(parser.parseCode("<?php\n$str = pack('VVV', 0x00010203, 0x04050607, 0x08090a0b);\nprint_r(unpack('Vaa/Vbb/Vcc', $str));\nprint_r(unpack('V2aa/Vcc', $str));\nprint_r(unpack('V3aa', $str));\nprint_r(unpack('V*aa', $str));\nprint_r(unpack('V*', $str));\n?>")).toMatchSnapshot();
  });
});
