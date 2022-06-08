// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/002.phpt
  it("gzcompress()/gzuncompress()", function () {
    expect(parser.parseCode("<?php\n$original = str_repeat(\"hallo php\",4096);\n$packed=gzcompress($original);\necho strlen($packed).\" \".strlen($original).\"\\n\";\n$unpacked=gzuncompress($packed);\nif (strcmp($original,$unpacked)==0) echo \"Strings are equal\\n\";\n/* with explicit compression level, length */\n$original = str_repeat(\"hallo php\",4096);\n$packed=gzcompress($original, 9);\necho strlen($packed).\" \".strlen($original).\"\\n\";\n$unpacked=gzuncompress($packed, 40000);\nif (strcmp($original,$unpacked)==0) echo \"Strings are equal\\n\";\n?>")).toMatchSnapshot();
  });
});
