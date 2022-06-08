// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation13-win32.phpt
  it("Test rename() function : variation - various invalid paths", function () {
    expect(parser.parseCode("<?php\n/* An array of files */\n$names_arr = array(\n  /* Invalid args */\n  -1, /* -1 is just a valid filename on windows */\n  TRUE, /* 1 as well, (string)TRUE > \"1\" */\n  FALSE,\n  \"\", // I think both p8 and php are wrong on the messages here\n  //p8 generates different messages to php, php is probably wrong\n  //php has either \"File Exists\" or \"Permission Denied\".\n  \" \",\n  /* prefix with path separator of a non existing directory*/\n  \"/no/such/file/dir\",\n  \"php/php\"\n);\n/* disable notice so we don't get the array to string conversion notice for \"$name\" where $name = array() */\nerror_reporting(E_ALL ^ E_NOTICE);\necho \"*** Testing rename() with obscure files ***\\n\";\n$file_path = __DIR__.\"/renameVar13\";\n$aFile = $file_path.'/afile.tmp';\nif (!mkdir($file_path)) {\n    die(\"fail to create $file_path tmp dir\");\n}\nfor( $i=0; $i < count($names_arr); $i++ ) {\n  $name = $names_arr[$i];\n  echo \"-- $i testing '$name' \" . gettype($name) . \" --\\n\";\n  touch($aFile);\n  var_dump(rename($aFile, $name));\n  if (file_exists($name)) {\n     @unlink($name);\n  }\n  if (file_exists($aFile)) {\n     @unlink($aFile);\n  }\n  var_dump(rename($name, $aFile));\n  if (file_exists($aFile)) {\n     @unlink($aFile);\n  }\n}\nrmdir($file_path);\n?>")).toMatchSnapshot();
  });
});
