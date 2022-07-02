// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readfile_basic-win32.phpt
  it("Test readfile() function: basic functionality", function () {
    expect(parser.parseCode("<?php\n// common file used\nrequire(__DIR__ . '/file.inc');\necho \"*** Testing readfile() : basic functionality ***\\n\";\n$file_path = __DIR__;\n$file_prefix = \"readfile_basic\";  // temp files created with this prefix\n// the content that is filled into the temp files as created\n$filetypes = array(\"numeric\", \"text\", \"empty\", \"alphanumeric\", \"text_with_new_line\");\n// different file modes\n$filemodes = array(\"w\", \"wt\", \"wb\", \"w+\", \"w+b\", \"w+t\",\n                   \"a\", \"at\", \"ab\", \"a+\", \"a+b\", \"a+t\",\n                   \"x\", \"xb\", \"xt\", \"x+\", \"x+b\", \"x+t\");\n// create file, read the file content, delete file\nforeach($filetypes as $type) {\n  echo \"\\n-- File filled with content type: $type --\\n\";\n  foreach($filemodes as $mode) {\n    echo \"-- File opened with mode: $mode --\\n\";\n      if ( strstr($mode, \"x\") ) {\n         $fp = fopen($file_path.\"/\".$file_prefix.\"1.tmp\", $mode);\n         fill_file($fp, $type, 100);\n         fclose($fp);\n      } else {\n        // creating file in write mode\n        create_files($file_path, 1, $type, 0755, 100, $mode, $file_prefix, 1, \"byte\");\n      }\n      $count = readfile($file_path.\"/\".$file_prefix.\"1.tmp\");\n      echo \"\\n\";\n      var_dump($count);\n      // delete files created\n      delete_files($file_path, 1, $file_prefix, 1);\n  }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
