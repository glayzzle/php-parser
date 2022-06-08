// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/pack64.phpt
  it("64bit pack()/unpack() tests", function () {
    expect(parser.parseCode("<?php\nprint_r(unpack(\"Q\", pack(\"Q\", 0xfffffffffffe)));\nprint_r(unpack(\"Q\", pack(\"Q\", 0)));\nprint_r(unpack(\"Q\", pack(\"Q\", 0x8000000000000002)));\nprint_r(unpack(\"Q\", pack(\"Q\", -1)));\nprint_r(unpack(\"Q\", pack(\"Q\", 0x8000000000000000)));\nprint_r(unpack(\"J\", pack(\"J\", 0xfffffffffffe)));\nprint_r(unpack(\"J\", pack(\"J\", 0)));\nprint_r(unpack(\"J\", pack(\"J\", 0x8000000000000002)));\nprint_r(unpack(\"J\", pack(\"J\", -1)));\nprint_r(unpack(\"J\", pack(\"J\", 0x8000000000000000)));\nprint_r(unpack(\"P\", pack(\"P\", 0xfffffffffffe)));\nprint_r(unpack(\"P\", pack(\"P\", 0)));\nprint_r(unpack(\"P\", pack(\"P\", 0x8000000000000002)));\nprint_r(unpack(\"P\", pack(\"P\", -1)));\nprint_r(unpack(\"P\", pack(\"P\", 0x8000000000000000)));\nprint_r(unpack(\"q\", pack(\"q\", 0xfffffffffffe)));\nprint_r(unpack(\"q\", pack(\"q\", 0)));\nprint_r(unpack(\"q\", pack(\"q\", 0x8000000000000002)));\nprint_r(unpack(\"q\", pack(\"q\", -1)));\nprint_r(unpack(\"q\", pack(\"q\", 0x8000000000000000)));\nprint_r(unpack(\"i\", pack(\"i\",  2147483647))); // Max int32\nprint_r(unpack(\"i\", pack(\"i\", -2147483647)));\nprint_r(unpack(\"i\", pack(\"i\", -2147483648))); // Min int32\nprint_r(unpack(\"I\", pack(\"I\",  4294967295))); // Max uint32\n?>")).toMatchSnapshot();
  });
});
