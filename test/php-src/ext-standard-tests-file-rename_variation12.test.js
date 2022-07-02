// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation12.phpt
  it("Test rename() function : variation - various relative, absolute paths", function () {
    expect(parser.parseCode("<?php\n/* Creating unique files in various dirs by passing relative paths to $dir arg */\necho \"*** Testing rename() with absolute and relative paths ***\\n\";\n$mainDir = \"renameVar11\";\n$subDir = \"renameVar11Sub\";\n$absMainDir = __DIR__.\"/\".$mainDir;\nmkdir($absMainDir);\n$absSubDir = $absMainDir.\"/\".$subDir;\nmkdir($absSubDir);\n$fromFile = \"renameMe.tmp\";\n$toFile = \"IwasRenamed.tmp\";\n$old_dir_path = getcwd();\nchdir(__DIR__);\n$allDirs = array(\n  // absolute paths\n  \"$absSubDir/\",\n  \"$absSubDir/../\".$subDir,\n  \"$absSubDir//.././\".$subDir,\n  \"$absSubDir/../../\".$mainDir.\"/./\".$subDir,\n  \"$absSubDir/..///\".$subDir.\"//..//../\".$subDir,\n  \"$absSubDir/BADDIR\",\n  // relative paths\n  $mainDir.\"/\".$subDir,\n  $mainDir.\"//\".$subDir,\n   $mainDir.\"///\".$subDir,\n  \"./\".$mainDir.\"/../\".$mainDir.\"/\".$subDir,\n  \"BADDIR\",\n);\nfor($i = 0; $i<count($allDirs); $i++) {\n  $j = $i+1;\n  $dir = $allDirs[$i];\n  echo \"\\n-- Iteration $j --\\n\";\n  touch($absSubDir.\"/\".$fromFile);\n  $res = rename($dir.\"/\".$fromFile, $dir.\"/\".$toFile);\n  var_dump($res);\n  if ($res == true) {\n     $res = rename($dir.\"/\".$toFile, $dir.\"/\".$fromFile);\n     var_dump($res);\n  }\n  unlink($absSubDir.\"/\".$fromFile);\n}\nchdir($old_dir_path);\nrmdir($absSubDir);\nrmdir($absMainDir);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
