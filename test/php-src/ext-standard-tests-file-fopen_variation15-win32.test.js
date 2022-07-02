// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fopen_variation15-win32.phpt
  it("Test fopen() function : variation: file uri, use include path = true", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fopen() : variation ***\\n\";\n// fopen with interesting windows paths.\n$includePathDir = getcwd().'/fopen15.includeDir';\n$testDir = 'fopen15.tmpDir';\n$absTestDir = getcwd().'/'.$testDir;\n$file = \"fopen_variation15.tmp\";\n$unixifiedDir = '/'.substr(str_replace('\\\\','/',$absTestDir),3);\n$absFile = $absTestDir.'/'.$file;\nmkdir($testDir);\nmkdir($includePathDir);\nset_include_path($includePathDir);\n$files = array(\"file://$testDir\\\\$file\",\n               \"file://$testDir/$file\",\n               \"file://./$testDir/$file\",\n               \"file://.\\\\$testDir\\\\$file\",\n               \"file://$absTestDir/$file\",\n               \"file://$absTestDir\\\\$file\",\n               \"file://$unixifiedDir/$file\"\n);\nruntest($files);\nchdir($testDir);\n$files = array(\"file://../$testDir/$file\",\n               \"file://..\\\\$testDir\\\\$file\",\n               \"file://$absTestDir/$file\",\n               \"file://$absTestDir\\\\$file\",\n               \"file://$unixifiedDir/$file\"\n);\nruntest($files);\nchdir(\"..\");\nrmdir($testDir);\nrmdir($includePathDir);\nfunction runtest($fileURIs) {\n   global $absFile;\n   $iteration = 0;\n   foreach($fileURIs as $fileURI) {\n      echo \"--- READ: $fileURI ---\\n\";\n      $readData = \"read:$iteration\";\n      $writeData = \"write:$iteration\";\n      // create the file and test read\n      $h = fopen($absFile, 'w');\n      fwrite($h, $readData);\n      fclose($h);\n      $h = fopen($fileURI, 'r', true);\n      if ($h !== false) {\n         if (fread($h, 4096) != $readData) {\n            echo \"contents not correct\\n\";\n         }\n         else {\n            echo \"test passed\\n\";\n         }\n         fclose($h);\n      }\n      unlink($absFile);\n      echo \"--- WRITE: $fileURI ---\\n\";\n      // create the file to test write\n      $h = fopen($fileURI, 'w', true);\n      if ($h !== false) {\n          fwrite($h, $writeData);\n          fclose($h);\n          $h = fopen($absFile, 'r');\n          if ($h !== false) {\n             if (fread($h, 4096) != $writeData) {\n                echo \"contents not correct\\n\";\n             }\n             else {\n                echo \"test passed\\n\";\n             }\n             fclose($h);\n          }\n          unlink($absFile);\n       }\n   }\n}\n?>")).toMatchSnapshot();
  });
});
