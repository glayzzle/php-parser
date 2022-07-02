// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stat_variation7-win32.phpt
  it("Test stat() functions: usage variations - names of dir/file stored in objects", function () {
    expect(parser.parseCode("<?php\n/* test the stats of dir/file when their names are stored in objects */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n/* create temp file and directory */\nmkdir(\"$file_path/stat_variation7/\");  // temp dir\n$file_handle = fopen(\"$file_path/stat_variation7.tmp\", \"w\");  // temp file\nfclose($file_handle);\necho \"\\n*** Testing stat(): with filename\n    and directory name stored inside a object ***\\n\";\n// creating object with members as numeric and non-numeric filename and directory name\nclass object_temp {\npublic $var_name;\npublic function __construct($name) {\n$this->var_name = $name;\n  }\n}\n// directory as member\n$obj1 = new object_temp(\"$file_path/stat_variation7/\");\n$obj2 = new object_temp(\"$file_path/stat_variation7a/\");\n// file as member\n$obj3 = new object_temp(\"$file_path/stat_variation7.tmp\");\n$obj4 = new object_temp(\"$file_path/stat_variation7a.tmp\");\necho \"\\n-- Testing stat() on filename stored inside an object --\\n\";\nvar_dump( stat($obj3->var_name) );\n$file_handle = fopen(\"$file_path/stat_variation7a.tmp\", \"w\");\nfclose($file_handle);\nvar_dump( stat($obj4->var_name) );\necho \"\\n-- Testing stat() on directory name stored inside an object --\\n\";\nvar_dump( stat($obj1->var_name) );\nmkdir(\"$file_path/stat_variation7a/\");\nvar_dump( stat($obj2->var_name) );\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
