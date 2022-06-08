// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/tempnam_variation6.phpt
  it("Test tempnam() function: usage variations - Using previous unique filename", function () {
    expect(parser.parseCode("<?php\n/* Trying to create unique files by passing previously created unique file name as prefix */\n$file_path = __DIR__;\necho \"\\n*** Test tempnam(): by passing previously created filenames ***\\n\";\n$file_name = \"tempnam_variation6.tmp\";\nfor($i=1; $i<=3; $i++) {\n  echo \"-- Iteration $i --\\n\";\n  $file_name = tempnam(\"$file_path\", $file_name);\n  if( file_exists($file_name) ) {\n    echo \"File name is => \";\n    print($file_name);\n    echo \"\\n\";\n    echo \"File created in => \";\n    $file_dir = dirname($file_name);\n    if ($file_dir == sys_get_temp_dir()) {\n       echo \"temp dir\\n\";\n    }\n    else if ($file_dir == $file_path) {\n       echo \"directory specified\\n\";\n    }\n    else {\n       echo \"unknown location\\n\";\n    }\n }\n  unlink($file_name);\n}\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
