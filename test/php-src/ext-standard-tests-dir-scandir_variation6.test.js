// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/scandir_variation6.phpt
  it("Test scandir() function : usage variations - Wildcards in directory path", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass a directory path using wildcards as $dir argument to test how scandir() behaves\n */\necho \"*** Testing scandir() : usage variations ***\\n\";\n// create the temporary directories\n$file_path = __DIR__;\n$dir_path = $file_path . \"/scandir_variation6\";\n$sub_dir_path = $dir_path . \"/sub_dir1\";\nmkdir($dir_path);\nmkdir($sub_dir_path);\n// with different wildcard characters\necho \"\\n-- Wildcard = '*' --\\n\";\nvar_dump( scandir($file_path . \"/scandir_var*\") );\nvar_dump( scandir($file_path . \"/*\") );\necho \"\\n-- Wildcard = '?' --\\n\";\nvar_dump( scandir($dir_path . \"/sub_dir?\") );\nvar_dump( scandir($dir_path . \"/sub?dir1\") );\n?>")).toMatchSnapshot();
  });
});
