// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readfile_variation9.phpt
  it("Test readfile() function : variation - variable types of path", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing readfile() : variation ***\\n\";\n$mainDir = \"readfileVar8\";\n$subDir = \"readfileVar8Sub\";\n$absMainDir = __DIR__.\"/\".$mainDir;\nmkdir($absMainDir);\n$absSubDir = $absMainDir.\"/\".$subDir;\nmkdir($absSubDir);\n$theFile = \"fileToRead.tmp\";\n$absFile = $absSubDir.'/'.$theFile;\n// create the file\n$h = fopen($absFile,\"w\");\nfwrite($h, \"The File Contents\");\nfclose($h);\n$old_dir_path = getcwd();\nchdir(__DIR__);\n$allDirs = array(\n  // absolute paths\n  \"$absSubDir/\",\n  \"$absSubDir/../\".$subDir,\n  \"$absSubDir//.././\".$subDir,\n  \"$absSubDir/../../\".$mainDir.\"/./\".$subDir,\n  \"$absSubDir/..///\".$subDir.\"//..//../\".$subDir,\n  \"$absSubDir/BADDIR\",\n  // relative paths\n  $mainDir.\"/\".$subDir,\n  $mainDir.\"//\".$subDir,\n   $mainDir.\"///\".$subDir,\n  \"./\".$mainDir.\"/../\".$mainDir.\"/\".$subDir,\n  \"BADDIR\",\n);\nfor($i = 0; $i<count($allDirs); $i++) {\n  $j = $i+1;\n  $dir = $allDirs[$i];\n  echo \"\\n-- Iteration $j --\\n\";\n  $ok = readfile($dir.'/'.$theFile);\n  if ($ok === 1) {\n     echo \"\\n\";\n  }\n}\nunlink($absFile);\nchdir($old_dir_path);\nrmdir($absSubDir);\nrmdir($absMainDir);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
