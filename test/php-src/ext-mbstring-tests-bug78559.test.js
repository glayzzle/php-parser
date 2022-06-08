// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug78559.phpt
  it("Bug #78559 (#78559\tHeap buffer overflow in mb_eregi)", function () {
    expect(parser.parseCode("<?php\n$str = \"5b5b5b5b5b5b5b492a5bce946b5c4b5d5c6b5c4b5d5c4b5d1cceb04b5d1cceb07a73717e4b1c52525252525252525252525252525252525252525252525252492a5bce946b5c4b5d5c6b5c4b5d5c4b5d1cceb04b5d1cceb07a73717e4b1c1cceb04b5d1cceb07a73717e4b1c302c36303030ceb07b7bd2a15c305c30663f436f6e74655c5238416711087b363030302c36303030ceb07b7b7b7b7b7b7b363030302c36303030ceb07b7b7b7b7b7b7b4a01\";\n$str = hex2bin($str);\nvar_dump(mb_eregi($str, $str));\n?>")).toMatchSnapshot();
  });
});
