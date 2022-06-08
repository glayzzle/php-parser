// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug75111.phpt
  it("Bug #75111 (Memory disclosure or DoS via crafted .bmp image)", function () {
    expect(parser.parseCode("<?php\n// craft BMP image\n$str  = hex2bin(\"424D3603000000000000\");\n$str .= pack(\"V\", -0x120000);   // offset of image data\n$str .= pack(\"V\", 40);          // length of header\n$str .= pack(\"V\", 256);         // width\n$str .= pack(\"V\", 256);         // height\n$str .= hex2bin(\"01001800000000000000000000000000000000000000000000000000\");\nvar_dump(imagecreatefromstring($str));\n?>")).toMatchSnapshot();
  });
});
