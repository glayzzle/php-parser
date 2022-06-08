// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rmdir_variation3.phpt
  it("Test rmdir() function : variation: various valid and invalid paths", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing rmdir() : variation ***\\n\";\n$workDir = \"rmdirVar3.tmp\";\n$subDir = \"aSubDir\";\nmkdir($workDir);\n$cwd = getcwd();\n$dirs = array(\n             // relative\n             $workDir.'/'.$subDir,\n             './'.$workDir.'/'.$subDir,\n             $workDir.'/../'.$workDir.'/'.$subDir,\n             // relative bad path\n             $workDir.'/../BADDIR/'.$subDir,\n             'BADDIR/'.$subDir,\n             //absolute\n             $cwd.'/'.$workDir.'/'.$subDir,\n             $cwd.'/./'.$workDir.'/'.$subDir,\n             $cwd.'/'.$workDir.'/../'.$workDir.'/'.$subDir,\n             //absolute bad path\n             $cwd.'/BADDIR/'.$subDir,\n             //trailing separators\n             $workDir.'/'.$subDir.'/',\n             $cwd.'/'.$workDir.'/'.$subDir.'/',\n             // multiple separators\n             $workDir.'//'.$subDir,\n             $cwd.'//'.$workDir.'//'.$subDir,\n             );\nforeach($dirs as $dir) {\n   mkdir($workDir.'/'.$subDir);\n   echo \"-- removing $dir --\\n\";\n   $res = rmdir($dir);\n   if ($res === true) {\n      echo \"Directory removed\\n\";\n   }\n   else {\n      rmdir($workDir.'/'.$subDir);\n   }\n}\nrmdir($workDir);\n?>")).toMatchSnapshot();
  });
});
