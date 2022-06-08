// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/003.phpt
  it("gzencode()", function () {
    expect(parser.parseCode("<?php\n$original = str_repeat(\"hallo php\",4096);\n$packed = gzencode($original);\necho strlen($packed).\" \".strlen($original). \"\\n\";\nif (strcmp($original, gzdecode($packed)) == 0) echo \"Strings are equal\";\n?>")).toMatchSnapshot();
  });
});
