// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readfile_variation1.phpt
  it("Test readfile() function: usage variation - stream_context", function () {
    expect(parser.parseCode("<?php\n/* test readfile() with third argument : context */\n// include file.inc\nrequire(\"file.inc\");\n$file_path = __DIR__;\n/* Variation 1 : Check working of third argument of readfile() */\necho \"*** Testing readfile(): checking third argument ***\\n\";\n// creating a context\n$context = stream_context_create();\n// temp file name used here\n$filename = \"$file_path/readfile_variation1.tmp\";\n// create file\n$fp = fopen($filename, \"w\");\nfill_file($fp, \"text_with_new_line\", 50);\nfclose($fp);\n$count = readfile($filename, true, $context);\necho \"\\n\";\nvar_dump($count);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
