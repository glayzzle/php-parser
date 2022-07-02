// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_variation8.phpt
  it("Test file function : variation - various absolute and relative paths", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file() : variation ***\\n\";\n$mainDir = \"fileVar8.dir\";\n$subDir = \"fileVar8Sub\";\n$absMainDir = __DIR__.\"/\".$mainDir;\nmkdir($absMainDir);\n$absSubDir = $absMainDir.\"/\".$subDir;\nmkdir($absSubDir);\n$old_dir_path = getcwd();\nchdir(__DIR__);\n$allDirs = array(\n  // absolute paths\n  \"$absSubDir/\",\n  \"$absSubDir/../\".$subDir,\n  \"$absSubDir//.././\".$subDir,\n  \"$absSubDir/../../\".$mainDir.\"/./\".$subDir,\n  \"$absSubDir/..///\".$subDir.\"//..//../\".$subDir,\n  \"$absSubDir/BADDIR\",\n  // relative paths\n  $mainDir.\"/\".$subDir,\n  $mainDir.\"//\".$subDir,\n   $mainDir.\"///\".$subDir,\n  \"./\".$mainDir.\"/../\".$mainDir.\"/\".$subDir,\n  \"BADDIR\",\n);\n$filename = 'FileGetContentsVar7.tmp';\n$absFile = $absSubDir.'/'.$filename;\n$h = fopen($absFile,\"w\");\nfwrite($h, \"contents read\");\nfclose($h);\nfor($i = 0; $i<count($allDirs); $i++) {\n  $j = $i+1;\n  $dir = $allDirs[$i];\n  echo \"\\n-- Iteration $j --\\n\";\n  var_dump(file($dir.\"/\".$filename));\n}\nunlink($absFile);\nchdir($old_dir_path);\nrmdir($absSubDir);\nrmdir($absMainDir);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
