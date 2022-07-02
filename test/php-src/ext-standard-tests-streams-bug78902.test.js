// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug78902.phpt
  it("Bug #78902: Memory leak when using stream_filter_append", function () {
    expect(parser.parseCode("<?php\n/** create temporary file 2mb file */\n$tmp_file_name = tempnam(sys_get_temp_dir(), 'test_');\n$fp = fopen($tmp_file_name, 'w+');\n$size = 1024 * 1024 * 2; // 2mb, larger than the memory limit\n$chunk = 1024;\nwhile ($size > 0) {\n    fputs($fp, str_pad('', min($chunk,$size)));\n    $size -= $chunk;\n}\nfclose($fp);\n$fp = fopen($tmp_file_name, 'r');\nstream_filter_append($fp, \"string.toupper\");\nwhile (!feof($fp)) {\n    fread($fp, 1);\n}\nfclose($fp);\nvar_dump(true);\n?>")).toMatchSnapshot();
  });
});
