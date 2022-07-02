// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/parse_ini_file_variation6.phpt
  it("Test parse_ini_file() function : variation - various absolute and relative paths", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing parse_ini_file() : variation ***\\n\";\n$mainDir = \"parseIniFileVar6.dir\";\n$subDir = \"parseIniFileVar6Sub\";\n$absMainDir = __DIR__.\"/\".$mainDir;\nmkdir($absMainDir);\n$absSubDir = $absMainDir.\"/\".$subDir;\nmkdir($absSubDir);\n$old_dir_path = getcwd();\nchdir(__DIR__);\n$allDirs = array(\n  // absolute paths\n  \"$absSubDir/\",\n  \"$absSubDir/../\".$subDir,\n  \"$absSubDir//.././\".$subDir,\n  \"$absSubDir/../../\".$mainDir.\"/./\".$subDir,\n  \"$absSubDir/..///\".$subDir.\"//..//../\".$subDir,\n  \"$absSubDir/BADDIR\",\n  // relative paths\n  $mainDir.\"/\".$subDir,\n  $mainDir.\"//\".$subDir,\n   $mainDir.\"///\".$subDir,\n  \"./\".$mainDir.\"/../\".$mainDir.\"/\".$subDir,\n  \"BADDIR\",\n);\n$filename = 'ParseIniFileVar6.ini';\n$content=\"a=test\";\n$absFile = $absSubDir.'/'.$filename;\n$h = fopen($absFile,\"w\");\nfwrite($h, $content);\nfclose($h);\nfor($i = 0; $i<count($allDirs); $i++) {\n  $j = $i+1;\n  $dir = $allDirs[$i];\n  echo \"\\n-- Iteration $j --\\n\";\n  var_dump(parse_ini_file($dir.\"/\".$filename));\n}\nunlink($absFile);\nchdir($old_dir_path);\nrmdir($absSubDir);\nrmdir($absMainDir);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
