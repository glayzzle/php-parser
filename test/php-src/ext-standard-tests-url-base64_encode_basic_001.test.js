// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/base64_encode_basic_001.phpt
  it("Test base64_encode() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test base64_encode with single byte values.\n */\necho \"*** Testing base64_encode() : basic functionality ***\\n\";\nfor ($i=0; $i<256; $i++) {\n    $str = pack(\"c\", $i);\n    $enc = base64_encode($str);\n    printf(\"0x%X: %s\\n\", $i, $enc);\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
