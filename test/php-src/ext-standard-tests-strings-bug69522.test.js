// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug69522.phpt
  it("Bug #69522 (heap buffer overflow in unpack())", function () {
    expect(parser.parseCode("<?php\n$a = pack(\"AAAAAAAAAAAA\", 1,2,3,4,5,6,7,8,9,10,11,12);\n$b = unpack('h2147483648', $a);\n?>")).toMatchSnapshot();
  });
});
