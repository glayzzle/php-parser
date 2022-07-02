// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/tempnam_variation1.phpt
  it("Test tempnam() function: usage variations - creating files", function () {
    expect(parser.parseCode("<?php\n/* Creating number of unique files by passing a file name as prefix */\n$file_path = __DIR__.\"/tempnamVar1\";\nmkdir($file_path);\necho \"*** Testing tempnam() in creation of unique files ***\\n\";\nfor($i=1; $i<=10; $i++) {\n  echo \"-- Iteration $i --\\n\";\n  $files[$i] = tempnam(\"$file_path\", \"tempnam_variation1.tmp\");\n  if( file_exists($files[$i]) ) {\n    echo \"File name is => \";\n    print($files[$i]);\n    echo \"\\n\";\n    echo \"File permissions are => \";\n    printf(\"%o\", fileperms($files[$i]) );\n    echo \"\\n\";\n    clearstatcache();\n    echo \"File inode is => \";\n    print_r( fileinode($files[$i]) ); //checking inodes\n    echo \"\\n\";\n    echo \"File created in => \";\n    $file_dir = dirname($files[$i]);\n    if ($file_dir == sys_get_temp_dir()) {\n       echo \"temp dir\\n\";\n    }\n    else if ($file_dir == $file_path) {\n       echo \"directory specified\\n\";\n    }\n    else {\n       echo \"unknown location\\n\";\n    }\n    clearstatcache();\n  }\n  else {\n    print(\"- File is not created -\");\n  }\n}\nfor($i=1; $i<=10; $i++) {\n  unlink($files[$i]);\n}\nrmdir($file_path);\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
