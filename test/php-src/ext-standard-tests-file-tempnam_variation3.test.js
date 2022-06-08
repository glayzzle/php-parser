// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/tempnam_variation3.phpt
  it("Test tempnam() function: usage variations - obscure prefixes", function () {
    expect(parser.parseCode("<?php\n/* Passing invalid/non-existing args for $prefix */\necho \"*** Testing tempnam() with obscure prefixes ***\\n\";\n$file_path = __DIR__.\"/tempnamVar3\";\nmkdir($file_path);\n/* An array of prefixes */\n$names_arr = array(\n  /* Invalid args */\n  -1,\n  TRUE,\n  FALSE,\n  \"\",\n  \" \",\n  \"\\0\",\n  array(),\n  /* prefix with path separator of a non existing directory*/\n  \"/no/such/file/dir\",\n  \"php/php\"\n);\nfor( $i=0; $i<count($names_arr); $i++ ) {\n  echo \"-- Iteration $i --\\n\";\n  try {\n    $file_name = tempnam(\"$file_path\", $names_arr[$i]);\n  } catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n    continue;\n  }\n  /* creating the files in existing dir */\n  if( file_exists($file_name) ) {\n    echo \"File name is => \";\n    print($file_name);\n    echo \"\\n\";\n    echo \"File permissions are => \";\n    printf(\"%o\", fileperms($file_name) );\n    echo \"\\n\";\n    echo \"File created in => \";\n    $file_dir = dirname($file_name);\n    if ($file_dir == sys_get_temp_dir()) {\n       echo \"temp dir\\n\";\n    }\n    else if ($file_dir == $file_path) {\n       echo \"directory specified\\n\";\n    }\n    else {\n       echo \"unknown location\\n\";\n    }\n  }\n  else {\n    echo \"-- File is not created --\\n\";\n  }\n  unlink($file_name);\n}\nrmdir($file_path);\n?>")).toMatchSnapshot();
  });
});
