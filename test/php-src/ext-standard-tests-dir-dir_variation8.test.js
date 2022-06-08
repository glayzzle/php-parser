// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/dir_variation8.phpt
  it("Test dir() function : usage variations - checking with wildcard characters", function () {
    expect(parser.parseCode("<?php\n/*\n * Create more than one temporary directory & subdirectory and check if dir() function can open\n * those directories when wildcard characters are used to refer to them.\n */\necho \"*** Testing dir() : checking with wildcard characters ***\\n\";\n// create the temporary directories\n$file_path = __DIR__;\n$dir_path = $file_path.\"/dir_variation81\";\n$sub_dir_path = $dir_path.\"/sub_dir1\";\n@mkdir($dir_path1);\n@mkdir($sub_dir_path);\n/* with different wildcard characters */\necho \"-- wildcard = '*' --\\n\";\nvar_dump( dir($file_path.\"/dir_var*\") );\nvar_dump( dir($file_path.\"/*\") );\necho \"-- wildcard = '?' --\\n\";\nvar_dump( dir($dir_path.\"/sub_dir?\") );\nvar_dump( dir($dir_path.\"/sub?dir1\") );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
