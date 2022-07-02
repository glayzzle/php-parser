// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/unlink_variation10.phpt
  it("Test unlink() function : variation: unlinking directories", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing unlink() : variation ***\\n\";\n$workDir = \"unlinkVar10.tmp\";\n$tmpDir = \"subDir.tmp\";\n$dirToLinkTo = $workDir.'/'.\"linkme.tmp\";\nmkdir($workDir);\n$cwd = getcwd();\nmkdir($dirToLinkTo);\n$dirs = array(\n             // relative\n             $workDir.'/'.$tmpDir,\n             './'.$workDir.'/'.$tmpDir,\n             $workDir.'/../'.$workDir.'/'.$tmpDir,\n             //absolute\n             $cwd.'/'.$workDir.'/'.$tmpDir,\n             $cwd.'/./'.$workDir.'/'.$tmpDir,\n             $cwd.'/'.$workDir.'/../'.$workDir.'/'.$tmpDir,\n             // multiple separators\n             $workDir.'//'.$tmpDir,\n             $cwd.'//'.$workDir.'//'.$tmpDir,\n             );\nforeach($dirs as $dirToUnlink) {\n   test_link($workDir.'/'.$tmpDir, $dirToLinkTo, $dirToUnlink, true);  //soft link\n   //cannot test hard links unless you are root.\n}\necho \"\\n--- try to unlink a directory ---\\n\";\nunlink($dirToLinkTo);\nrmdir($dirToLinkTo);\nrmdir($workDir);\nfunction test_link($linkedDir, $toLinkTo, $tounlink, $softlink) {\n   if ($softlink == true) {\n      symlink($toLinkTo, $linkedDir);\n      $msg = \"soft link\";\n   }\n   else {\n      link($toLinkTo, $linkedDir);\n      $msg = \"hard link\";\n   }\n   echo \"-- unlinking $msg $tounlink --\\n\";\n   $res = unlink($tounlink);\n   if ($res === true) {\n      if (is_link($tounlink) === false) {\n        echo \"directory unlinked\\n\";\n      }\n      else {\n        echo \"FAILED: directory not unlinked\\n\";\n      }\n   }\n   else {\n      unlink($linkedDir);\n   }\n}\n?>")).toMatchSnapshot();
  });
});
