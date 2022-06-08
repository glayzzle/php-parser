// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/tempnam_variation5.phpt
  it("Test tempnam() function: usage variations - existing file", function () {
    expect(parser.parseCode("<?php\n/* Passing an existing file as $prefix for tempnam() fn */\n$file_path = __DIR__;\necho \"*** Test tempnam() function: by passing an existing filename as prefix ***\\n\";\n$dir_name = $file_path.\"/tempnam_variation5\";\nmkdir($dir_name);\n$h = fopen($dir_name.\"/tempnam_variation5.tmp\", \"w\");\nfor($i=1; $i<=3; $i++) {\n  echo \"-- Iteration $i --\\n\";\n  $created_file = tempnam(\"$dir_name\", \"tempnam_variation5.tmp\");\n  if( file_exists($created_file) ) {\n    echo \"File name is => \";\n    print($created_file);\n    echo \"\\n\";\n  }\n  else\n    print(\"File is not created\");\n  unlink($created_file);\n}\nfclose($h);\nunlink($dir_name.\"/tempnam_variation5.tmp\");\nrmdir($dir_name);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
