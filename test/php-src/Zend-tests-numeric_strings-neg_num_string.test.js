// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_strings/neg_num_string.phpt
  it("Test edge-cases for negative num strings in interpolated string offsets", function () {
    expect(parser.parseCode("<?php\n$a = [\n    \"0\" => 1,\n    \"-0\" => 2,\n    \"1\" => 3,\n    \"-1\" => 4,\n    \"0x0\" => 5,\n    \"-0x0\" => 6,\n    \"00\" => 7,\n    \"-00\" => 8,\n    \"9223372036854775808\" => 9,\n    \"-9223372036854775808\" => 10,\n    \"2147483648\" => 11,\n    \"-2147483648\" => 12,\n];\nvar_dump(\"$a[0]\");\nvar_dump(\"$a[-0]\");\nvar_dump(\"$a[1]\");\nvar_dump(\"$a[-1]\");\nvar_dump(\"$a[0x0]\");\nvar_dump(\"$a[-0x0]\");\nvar_dump(\"$a[00]\");\nvar_dump(\"$a[-00]\");\nvar_dump(\"$a[9223372036854775808]\");\nvar_dump(\"$a[-9223372036854775808]\");\nvar_dump(\"$a[2147483648]\");\nvar_dump(\"$a[-2147483648]\");\n?>")).toMatchSnapshot();
  });
});
