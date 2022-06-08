// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_variation7-win32-mb.phpt
  it("Test file_get_contents() function : variation - various absolute and relative paths", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file_get_contents() : variation ***\\n\";\n$mainDir = \"fileGetContentsVar7私はガラスを食べられます.dir\";\n$subDir = \"fileGetContentsVar7Sub私はガラスを食べられます\";\n$absMainDir = __DIR__.\"\\\\\".$mainDir;\nmkdir($absMainDir);\n$absSubDir = $absMainDir.\"\\\\\".$subDir;\nmkdir($absSubDir);\n$old_dir_path = getcwd();\nchdir(__DIR__);\n$unixifiedDir = '/'.substr(str_replace('\\\\','/',$absSubDir),3);\n$allDirs = array(\n  // absolute paths\n  \"$absSubDir\\\\\",\n  \"$absSubDir\\\\..\\\\\".$subDir,\n  \"$absSubDir\\\\\\\\..\\\\.\\\\\".$subDir,\n  \"$absSubDir\\\\..\\\\..\\\\\".$mainDir.\"\\\\.\\\\\".$subDir,\n  \"$absSubDir\\\\..\\\\\\\\\\\\\".$subDir.\"\\\\\\\\..\\\\\\\\..\\\\\".$subDir,\n  \"$absSubDir\\\\BADDIR\",\n  // relative paths\n  $mainDir.\"\\\\\".$subDir,\n  $mainDir.\"\\\\\\\\\".$subDir,\n   $mainDir.\"\\\\\\\\\\\\\".$subDir,\n  \".\\\\\".$mainDir.\"\\\\..\\\\\".$mainDir.\"\\\\\".$subDir,\n  \"BADDIR\",\n  // unixifed path\n  $unixifiedDir,\n);\n$filename = 'FileGetContentsVar7.tmp';\n$absFile = $absSubDir.'/'.$filename;\n$h = fopen($absFile,\"w\");\nfwrite($h, \"contents read\");\nfclose($h);\nfor($i = 0; $i<count($allDirs); $i++) {\n  $j = $i+1;\n  $dir = $allDirs[$i];\n  echo \"\\n-- Iteration $j --\\n\";\n  var_dump(file_get_contents($dir.\"\\\\\".$filename));\n}\nunlink($absFile);\nchdir($old_dir_path);\nrmdir($absSubDir);\nrmdir($absMainDir);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
