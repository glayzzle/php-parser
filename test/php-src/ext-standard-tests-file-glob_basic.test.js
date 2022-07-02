// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/glob_basic.phpt
  it("Test glob() function: basic functions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing glob() : basic functions ***\\n\";\n$file_path = __DIR__;\n// temp dirname used here\n$dirname = \"$file_path/glob_basic\";\n// temp dir created\nmkdir($dirname);\n// temp files created\n$fp = fopen(\"$dirname/wonder12345\", \"w\");\nfclose($fp);\n$fp = fopen(\"$dirname/wonder.txt\", \"w\");\nfclose($fp);\n$fp = fopen(\"$dirname/file.text\", \"w\");\nfclose($fp);\n// glob() with default arguments\nsort_var_dump( glob($dirname.\"/*\") );\nsort_var_dump( glob($dirname.\"/*.txt\") );\nsort_var_dump( glob($dirname.\"/*.t?t\") );\nsort_var_dump( glob($dirname.\"/*.t*t\") );\nsort_var_dump( glob($dirname.\"/*.?\") );\nsort_var_dump( glob($dirname.\"/*.*\") );\necho \"Done\\n\";\nfunction sort_var_dump($results) {\n   sort($results);\n   var_dump($results);\n}\n?>")).toMatchSnapshot();
  });
});
