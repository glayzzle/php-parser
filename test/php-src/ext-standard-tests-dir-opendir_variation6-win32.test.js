// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/opendir_variation6-win32.phpt
  it("Test opendir() function : usage variations - Different wildcards", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass paths containing wildcards to test if opendir() recognises them\n */\necho \"*** Testing opendir() : usage variations ***\\n\";\n// create the temporary directories\n$file_path = __DIR__;\n$dir_path = $file_path . \"/opendir_variation6\";\n$sub_dir_path = $dir_path . \"/sub_dir1\";\nmkdir($dir_path);\nmkdir($sub_dir_path);\n// with different wildcard characters\necho \"\\n-- Wildcard = '*' --\\n\";\nvar_dump( opendir($file_path . \"/opendir_var*\") );\nvar_dump( opendir($file_path . \"/*\") );\necho \"\\n-- Wildcard = '?' --\\n\";\nvar_dump( opendir($dir_path . \"/sub_dir?\") );\nvar_dump( opendir($dir_path . \"/sub?dir1\") );\n?>")).toMatchSnapshot();
  });
});
