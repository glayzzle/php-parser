// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/flock_basic.phpt
  it("Test flock() function: Basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\nDescription: PHP supports a portable way of locking complete files\n  in an advisory way\n*/\necho \"*** Testing flock() fun with file and dir ***\\n\";\n$lock_file = preg_replace(\"~\\.phpt?$~\", '', __FILE__);\n$file_handle = fopen($lock_file, \"w\");\nvar_dump(flock($file_handle, LOCK_SH|LOCK_NB));\nvar_dump(flock($file_handle, LOCK_UN));\nvar_dump(flock($file_handle, LOCK_EX));\nvar_dump(flock($file_handle, LOCK_UN));\nfclose($file_handle);\nunlink($lock_file);\n$lock_dir = sprintf(\"%s.dir\", preg_replace(\"~\\.phpt?$~\", '', __FILE__));\nmkdir($lock_dir);\n$dir_handle = opendir($lock_dir);\nvar_dump(flock($dir_handle, LOCK_SH|LOCK_NB));\nvar_dump(flock($dir_handle, LOCK_UN));\nvar_dump(flock($dir_handle, LOCK_EX));\nvar_dump(flock($dir_handle, LOCK_UN));\nclosedir($dir_handle);\nrmdir($lock_dir);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
