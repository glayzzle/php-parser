// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/001.phpt
  it("gzdeflate()/gzinflate()", function () {
    expect(parser.parseCode("<?php\n$original = str_repeat(\"hallo php\",4096);\n$packed=gzdeflate($original);\necho strlen($packed).\" \".strlen($original).\"\\n\";\n$unpacked=gzinflate($packed);\nif (strcmp($original,$unpacked)==0) echo \"Strings are equal\\n\";\n/* with explicit compression level, length */\n$original = str_repeat(\"hallo php\",4096);\n$packed=gzdeflate($original, 9);\necho strlen($packed).\" \".strlen($original).\"\\n\";\n$unpacked=gzinflate($packed, 40000);\nif (strcmp($original,$unpacked)==0) echo \"Strings are equal\\n\";\n$original = 'aaaaaaaaaaaaaaa';\n$packed=gzdeflate($original);\necho strlen($packed).\" \".strlen($original).\"\\n\";\n$unpacked=gzinflate($packed);\nif (strcmp($original,$unpacked)==0) echo \"Strings are equal\";\n?>")).toMatchSnapshot();
  });
});
