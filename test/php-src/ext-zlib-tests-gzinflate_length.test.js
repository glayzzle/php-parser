// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzinflate_length.phpt
  it("gzinflate() and $length argument", function () {
    expect(parser.parseCode("<?php\n$original = 'aaaaaaaaaaaaaaa';\n$packed=gzdeflate($original);\necho strlen($packed).\" \".strlen($original).\"\\n\";\n$unpacked=gzinflate($packed, strlen($original));\nif (strcmp($original,$unpacked)==0) echo \"Strings are equal\\n\";\n$unpacked=gzinflate($packed, strlen($original)*10);\nif (strcmp($original,$unpacked)==0) echo \"Strings are equal\\n\";\n$unpacked=gzinflate($packed, 1);\nif ($unpacked === false) echo \"Failed (as expected)\\n\";\n?>")).toMatchSnapshot();
  });
});
