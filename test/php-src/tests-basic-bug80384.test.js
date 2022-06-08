// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug80384.phpt
  it("Bug #80384 large reads cause filters to internally buffer large amounts of memory", function () {
    expect(parser.parseCode("<?php\n/* First, create a file to read */\n$tmp_filename = __DIR__ . \"/bug80384.tmp\";\n$fp = fopen($tmp_filename, 'w');\nfor ($i=0; $i<1024; $i++) {\n    fwrite($fp, str_repeat('ABCDEFGH', 1024));\n}\nfclose($fp);\n/* Stream the file through a filter */\n$fp = fopen($tmp_filename, 'r');\n$filter = stream_filter_append($fp, \"string.rot13\");\n$mem_start = memory_get_usage();\nfread($fp, 8 * 1024 * 1024);\n$mem_final = memory_get_usage();\nfclose($fp);\nvar_dump($mem_final - $mem_start < 32768);\n?>")).toMatchSnapshot();
  });
});
