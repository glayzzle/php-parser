// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bindec_basiclong_64bit.phpt
  it("Test bindec function : 64bit long tests", function () {
    expect(parser.parseCode("<?php\ndefine(\"MAX_64Bit\", 9223372036854775807);\ndefine(\"MAX_32Bit\", 2147483647);\ndefine(\"MIN_64Bit\", -9223372036854775807 - 1);\ndefine(\"MIN_32Bit\", -2147483647 - 1);\n$binLongStrs = array(\n   '0'.str_repeat('1',63),\n   str_repeat('1',64),\n   '0'.str_repeat('1',31),\n   str_repeat('1',32),\n   '0'.str_repeat('1',64),\n   str_repeat('1',65),\n   '0'.str_repeat('1',32),\n   str_repeat('1',33)\n);\nforeach ($binLongStrs as $strVal) {\n   echo \"--- testing: $strVal ---\\n\";\n   var_dump(bindec($strVal));\n}\n?>")).toMatchSnapshot();
  });
});
