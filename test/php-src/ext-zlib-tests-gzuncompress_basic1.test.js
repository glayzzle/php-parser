// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzuncompress_basic1.phpt
  it("Test gzuncompress() function : basic functionality", function () {
    expect(parser.parseCode("<?php\ninclude(__DIR__ . '/data.inc');\necho \"*** Testing gzuncompress() : basic functionality ***\\n\";\n// Initialise all required variables\n$compressed = gzcompress($data);\necho \"\\n-- Basic decompress --\\n\";\nvar_dump(strcmp($data, gzuncompress($compressed)));\n$length = 3547;\necho \"\\n-- Calling gzuncompress() with max length of $length --\\n\";\necho \"Result length is \".  strlen(gzuncompress($compressed, $length)) .  \"\\n\";\n?>")).toMatchSnapshot();
  });
});
