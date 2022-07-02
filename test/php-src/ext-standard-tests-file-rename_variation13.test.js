// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation13.phpt
  it("Test rename() function : variation - various invalid paths", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing rename() with obscure files ***\\n\";\n$file_path = __DIR__.\"/renameVar13\";\n$aFile = $file_path.'/afile.tmp';\nmkdir($file_path);\n/* An array of files */\n$names_arr = array(\n  /* Invalid args */\n  -1,\n  TRUE,\n  FALSE,\n  \"\",\n  \" \",\n  /* prefix with path separator of a non existing directory*/\n  \"/no/such/file/dir\",\n  \"php/php\"\n);\nfor( $i=0; $i<count($names_arr); $i++ ) {\n  $name = $names_arr[$i];\n  echo @\"-- testing '$name' --\\n\";\n  touch($aFile);\n  var_dump(rename($aFile, $name));\n  if (file_exists($name)) {\n     unlink($name);\n  }\n  if (file_exists($aFile)) {\n     unlink($aFile);\n  }\n  var_dump(rename($name, $aFile));\n  if (file_exists($aFile)) {\n     unlink($aFile);\n  }\n}\nrmdir($file_path);\n?>")).toMatchSnapshot();
  });
});
