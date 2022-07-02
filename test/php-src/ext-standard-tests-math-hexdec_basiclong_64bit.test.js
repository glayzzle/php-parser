// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/hexdec_basiclong_64bit.phpt
  it("Test hexdec function : 64bit long tests", function () {
    expect(parser.parseCode("<?php\ndefine(\"MAX_64Bit\", 9223372036854775807);\ndefine(\"MAX_32Bit\", 2147483647);\ndefine(\"MIN_64Bit\", -9223372036854775807 - 1);\ndefine(\"MIN_32Bit\", -2147483647 - 1);\n$hexLongStrs = array(\n   '7'.str_repeat('f',15),\n   str_repeat('f',16),\n   '7'.str_repeat('f',7),\n   str_repeat('f',8),\n   '7'.str_repeat('f',16),\n   str_repeat('f',18),\n   '7'.str_repeat('f',8),\n   str_repeat('f',9)\n);\nforeach ($hexLongStrs as $strVal) {\n   echo \"--- testing: $strVal ---\\n\";\n   var_dump(hexdec($strVal));\n}\n?>")).toMatchSnapshot();
  });
});
