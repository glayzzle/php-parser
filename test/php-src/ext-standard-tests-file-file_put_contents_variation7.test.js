// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_put_contents_variation7.phpt
  it("Test file_put_contents() function : usage variation - various absolute and relative paths", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file_put_contents() : usage variation ***\\n\";\n$mainDir = \"filePutContentsVar7.dir\";\n$subDir = \"filePutContentsVar7Sub\";\n$absMainDir = __DIR__.\"/\".$mainDir;\nmkdir($absMainDir);\n$absSubDir = $absMainDir.\"/\".$subDir;\nmkdir($absSubDir);\n$old_dir_path = getcwd();\nchdir(__DIR__);\n// Note invalid dirs in p8 result in (The system cannot find the path specified.)\n// rather than No Such File or Directory in php.net\n$allDirs = array(\n  // absolute paths\n  \"$absSubDir/\",\n  \"$absSubDir/../\".$subDir,\n  \"$absSubDir//.././\".$subDir,\n  \"$absSubDir/../../\".$mainDir.\"/./\".$subDir,\n  \"$absSubDir/..///\".$subDir.\"//..//../\".$subDir,\n  \"$absSubDir/BADDIR\",\n  // relative paths\n  $mainDir.\"/\".$subDir,\n  $mainDir.\"//\".$subDir,\n   $mainDir.\"///\".$subDir,\n  \"./\".$mainDir.\"/../\".$mainDir.\"/\".$subDir,\n  \"BADDIR\",\n);\n$filename = 'FileGetContentsVar7.tmp';\n$absFile = $absSubDir.'/'.$filename;\n$data = \"This was the written data\";\nfor($i = 0; $i<count($allDirs); $i++) {\n  $j = $i+1;\n  $dir = $allDirs[$i];\n  echo \"\\n-- Iteration $j --\\n\";\n  $res = file_put_contents($dir.\"/\".$filename, ($data . $i));\n  if ($res !== false) {\n      $in = file_get_contents($absFile);\n      if ($in == ($data . $i)) {\n         echo \"Data written correctly\\n\";\n      }\n      else {\n         echo \"Data not written correctly or to correct place\\n\";\n      }\n      unlink($dir.\"/\".$filename);\n  }\n  else {\n     echo \"No data written\\n\";\n  }\n}\nchdir($old_dir_path);\nrmdir($absSubDir);\nrmdir($absMainDir);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
