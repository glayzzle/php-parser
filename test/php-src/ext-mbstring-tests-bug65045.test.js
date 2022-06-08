// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug65045.phpt
  it("Bug #65045: mb_convert_encoding breaks well-formed character", function () {
    expect(parser.parseCode("<?php\n//declare(encoding = 'UTF-8');\nmb_internal_encoding('UTF-8');\n$str = \"\\xF0\\xA4\\xAD\".  \"\\xF0\\xA4\\xAD\\xA2\".\"\\xF0\\xA4\\xAD\\xA2\";\n$expected = \"\\xEF\\xBF\\xBD\".\"\\xF0\\xA4\\xAD\\xA2\".\"\\xF0\\xA4\\xAD\\xA2\";\n$str2 = \"\\xF0\\xA4\\xAD\\xA2\".\"\\xF0\\xA4\\xAD\\xA2\".\"\\xF0\\xA4\\xAD\";\n$expected2 = \"\\xF0\\xA4\\xAD\\xA2\".\"\\xF0\\xA4\\xAD\\xA2\".\"\\xEF\\xBF\\xBD\";\nmb_substitute_character(0xFFFD);\nvar_dump(\n    $expected === htmlspecialchars_decode(htmlspecialchars($str, ENT_SUBSTITUTE, 'UTF-8')),\n    $expected2 === htmlspecialchars_decode(htmlspecialchars($str2, ENT_SUBSTITUTE, 'UTF-8')),\n    $expected === mb_convert_encoding($str, 'UTF-8', 'UTF-8'),\n    $expected2 === mb_convert_encoding($str2, 'UTF-8', 'UTF-8')\n);\n?>")).toMatchSnapshot();
  });
});
