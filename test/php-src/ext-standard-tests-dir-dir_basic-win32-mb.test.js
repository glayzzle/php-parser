// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/dir_basic-win32-mb.phpt
  it("Test dir() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing dir() : basic functionality ***\\n\";\n// include the file.inc for Function: function create_files()\ninclude(__DIR__.\"/../file/file.inc\");\n// create the temporary directory\n$file_path = __DIR__;\n$dir_path = $file_path.\"/私はガラスを食べられますdir_basic\";\n@mkdir($dir_path);\n// create files within the temporary directory\ncreate_files($dir_path, 3, \"alphanumeric\", 0755, 1, \"w\", \"私はガラスを食べられますdir_basic\");\necho \"Get Directory instance:\\n\";\n$d = dir($dir_path);\nvar_dump( $d );\necho \"\\nRead and rewind:\\n\";\nvar_dump( $d->read() );\nvar_dump( $d->read() );\nvar_dump( $d->rewind() );\necho \"\\nTest using handle directly:\\n\";\nvar_dump( readdir($d->handle) );\nvar_dump( readdir($d->handle) );\necho \"\\nClose directory:\\n\";\nvar_dump( $d->close() );\nvar_dump( $d );\necho \"\\nTest read after closing the dir:\\n\";\ntry {\n    var_dump( $d->read() );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n// delete temp files\ndelete_files($dir_path, 3, \"私はガラスを食べられますdir_basic\", 1, \".tmp\");\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
