// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/octdec_basiclong_64bit.phpt
  it("Test octdec function : 64bit long tests", function () {
    expect(parser.parseCode("<?php\ndefine(\"MAX_64Bit\", 9223372036854775807);\ndefine(\"MAX_32Bit\", 2147483647);\ndefine(\"MIN_64Bit\", -9223372036854775807 - 1);\ndefine(\"MIN_32Bit\", -2147483647 - 1);\n$octLongStrs = array(\n   '777777777777777777777',\n   '1777777777777777777777',\n   '17777777777',\n   '37777777777',\n   '377777777777777777777777',\n   '17777777777777777777777777',\n   '377777777777',\n   '777777777777',\n);\nforeach ($octLongStrs as $strVal) {\n   echo \"--- testing: $strVal ---\\n\";\n   var_dump(octdec($strVal));\n}\n?>")).toMatchSnapshot();
  });
});
