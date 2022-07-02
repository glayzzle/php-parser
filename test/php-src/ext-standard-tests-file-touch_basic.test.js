// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/touch_basic.phpt
  it("Test touch() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing touch() : basic functionality ***\\n\";\n$filename = __DIR__.\"/touch_basic.dat\";\necho \"\\n--- testing touch creates a file ---\\n\";\n@unlink($filename);\nif (file_exists($filename)) {\n   die(\"touch_basic failed\");\n}\nvar_dump( touch($filename) );\nif (file_exists($filename) == false) {\n   die(\"touch_basic failed\");\n}\necho \"\\n --- testing touch doesn't alter file contents ---\\n\";\n$testln = \"Here is a test line\";\n$h = fopen($filename, \"wb\");\nfwrite($h, $testln);\nfclose($h);\ntouch($filename);\n$h = fopen($filename, \"rb\");\necho fgets($h);\nfclose($h);\necho \"\\n\\n --- testing touch alters the correct file metadata ---\\n\";\n$init_meta = stat($filename);\nclearstatcache();\nsleep(1);\ntouch($filename);\n$next_meta = stat($filename);\n$type = array(\"dev\", \"ino\", \"mode\", \"nlink\", \"uid\", \"gid\",\n              \"rdev\", \"size\", \"atime\", \"mtime\", \"ctime\",\n              \"blksize\", \"blocks\");\nfor ($i = 0; $i < count($type); $i++) {\n   if ($init_meta[$i] != $next_meta[$i]) {\n      echo \"stat data differs at $type[$i]\\n\";\n   }\n}\n// Initialise all required variables\n$time = 10000;\n$atime = 20470;\n// Calling touch() with all possible arguments\necho \"\\n --- testing touch using all parameters ---\\n\";\nvar_dump( touch($filename, $time, $atime) );\nclearstatcache();\n$init_meta = stat($filename);\necho \"ctime=\".$init_meta['ctime'].\"\\n\";\necho \"mtime=\".$init_meta['mtime'].\"\\n\";\necho \"atime=\".$init_meta['atime'].\"\\n\";\nunlink($filename);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
