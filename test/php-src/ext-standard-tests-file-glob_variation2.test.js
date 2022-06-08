// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/glob_variation2.phpt
  it("Test glob() function with relative path", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\n// temp dirname used here\n$dir_name = 'glob_test';\n// create temp directory\nmkdir(\"$file_path/$dir_name\");\n// create temp file\n$fp = fopen(\"$file_path/$dir_name/file.text\", \"w\");\nfclose($fp);\necho \"Testing glob() with relative paths:\\n\";\nchdir(\"$file_path/$dir_name\");\nvar_dump( glob(\"./*\") );\nvar_dump( glob(\"../$dir_name/*\"));\nchdir(\"$file_path\");\nvar_dump( glob(\"$dir_name/*\"));\nvar_dump( glob(\"$dir_name\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
