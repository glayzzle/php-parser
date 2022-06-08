// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/006_variation1.phpt
  it("Test fileperms() & chmod() functions: usage variation - perms(0000-0777)", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fileperms() & chmod() : usage variations ***\\n\";\n$file_name = __DIR__.\"/006_variation1.tmp\";\n$file_handle = fopen($file_name, \"w\");\nfclose($file_handle);\n$dir_name = __DIR__.\"/006_variation1\";\nmkdir($dir_name);\n$count = 1;\necho \"-- Testing all permission from octal 0000 to octal 0777 on file and dir --\\n\";\nfor($mode = 0000; $mode <= 0777; $mode++) {\n  echo \"-- Iteration $count --\\n\";\n  var_dump( chmod($file_name, $mode) );\n  printf(\"%o\", fileperms($file_name) );\n  echo \"\\n\";\n  clearstatcache();\n  var_dump( chmod($dir_name, $mode) );\n  printf(\"%o\", fileperms($dir_name) );\n  echo \"\\n\";\n  clearstatcache();\n  $count++;\n}\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
