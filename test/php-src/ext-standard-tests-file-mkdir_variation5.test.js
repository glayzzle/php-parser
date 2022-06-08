// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/mkdir_variation5.phpt
  it("Test mkdir() function : variation: various valid and invalid paths", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mkdir() : variation ***\\n\";\n$workDir = \"mkdirVar5.tmp\";\n$subDir = \"aSubDir\";\nmkdir($workDir);\n$cwd = getcwd();\n$dirs = array(\n             // relative\n             $workDir.'/'.$subDir,\n             './'.$workDir.'/'.$subDir,\n             $workDir.'/../'.$workDir.'/'.$subDir,\n             // relative bad path\n             $workDir.'/../BADDIR/'.$subDir,\n             'BADDIR/'.$subDir,\n             //absolute\n             $cwd.'/'.$workDir.'/'.$subDir,\n             $cwd.'/./'.$workDir.'/'.$subDir,\n             $cwd.'/'.$workDir.'/../'.$workDir.'/'.$subDir,\n             //absolute bad path\n             $cwd.'/BADDIR/'.$subDir,\n             //trailing separators\n             $workDir.'/'.$subDir.'/',\n             $cwd.'/'.$workDir.'/'.$subDir.'/',\n             // multiple separators\n             $workDir.'//'.$subDir,\n             $cwd.'//'.$workDir.'//'.$subDir,\n             );\nforeach($dirs as $dir) {\n   echo \"-- creating $dir --\\n\";\n   $res = mkdir($dir);\n   if ($res === true) {\n      echo \"Directory created\\n\";\n      rmdir($dir);\n   }\n}\nrmdir($workDir);\n?>")).toMatchSnapshot();
  });
});
