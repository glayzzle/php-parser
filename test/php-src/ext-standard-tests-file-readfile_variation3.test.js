// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readfile_variation3.phpt
  it("Test readfile() function: usage variation - include path", function () {
    expect(parser.parseCode("<?php\n/* test readfile() by providing an include path, second argument */\n// include file.inc\nrequire(\"file.inc\");\n$file_path = __DIR__;\n$dirname = \"$file_path/readfile_variation3\";\necho \"*** Testing readfile(): checking second argument, include path ***\\n\";\n// temp dir created\nmkdir($dirname);\n// temp file name used here\n$filename = \"$dirname/readfile_variation3.tmp\";\n// create file\n$fp = fopen($filename, \"w\");\nfill_file($fp, \"text_with_new_line\", 50);\nfclose($fp);\n// including $dirname in 'include_path'\nini_set('include_path',$dirname);\n// 'include_path' set to true\n$count = readfile(\"readfile_variation3.tmp\", true);\necho \"\\n\";\nvar_dump($count);\n// use the context argument with include path\necho \"*** Testing readfile(): checking second argument, include path with context specified ***\\n\";\n$context = stream_context_create();\n$count = readfile(\"readfile_variation3.tmp\", true, $context);\necho \"\\n\";\nvar_dump($count);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
