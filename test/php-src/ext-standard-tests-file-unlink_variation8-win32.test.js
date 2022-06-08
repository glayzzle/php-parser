// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/unlink_variation8-win32.phpt
  it("Test unlink() function : variation: various valid and invalid paths", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing unlink() : variation ***\\n\";\n$workDir = \"unlinkVar8.tmp\";\n$tmpFile = \"file.tmp\";\nchdir(__DIR__);\nmkdir($workDir);\n$cwd = __DIR__;\n$files = array(\n             // relative\n             $workDir.'/'.$tmpFile,\n             './'.$workDir.'/'.$tmpFile,\n             $workDir.'/../'.$workDir.'/'.$tmpFile,\n             // relative bad path\n             $workDir.'/../BADDIR/'.$tmpFile,\n             'BADDIR/'.$tmpFile,\n             //absolute\n             $cwd.'/'.$workDir.'/'.$tmpFile,\n             $cwd.'/./'.$workDir.'/'.$tmpFile,\n             $cwd.'/'.$workDir.'/../'.$workDir.'/'.$tmpFile,\n             //absolute bad path\n             $cwd.'/BADDIR/'.$tmpFile,\n             //trailing separators\n             $workDir.'/'.$tmpFile.'/',\n             $cwd.'/'.$workDir.'/'.$tmpFile.'/',\n             // multiple separators\n             $workDir.'//'.$tmpFile,\n             $cwd.'//'.$workDir.'//'.$tmpFile,\n             );\nforeach($files as $fileToUnlink) {\n   test_realfile($workDir.'/'.$tmpFile, $fileToUnlink);\n}\nrmdir($workDir);\nfunction test_realfile($file, $tounlink) {\n   touch($file);\n   echo \"-- removing $tounlink --\\n\";\n   $res = unlink($tounlink);\n   if ($res === true) {\n      if (file_exists($tounlink) === false) {\n        echo \"file removed\\n\";\n      }\n      else {\n        echo \"FAILED: file not removed\\n\";\n      }\n   }\n   else {\n      unlink($file);\n   }\n}\n?>")).toMatchSnapshot();
  });
});
