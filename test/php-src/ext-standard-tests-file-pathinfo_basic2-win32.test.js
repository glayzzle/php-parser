// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/pathinfo_basic2-win32.phpt
  it("Test pathinfo() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing basic functions of pathinfo() ***\\n\";\n$paths = array (\n            'c:\\..\\dir1',\n            'c:\\test\\..\\test2\\.\\adir\\afile.txt',\n            '/usr/include/../arpa/./inet.h',\n            'c:\\test\\adir\\afile..txt',\n            '/usr/include/arpa/inet..h',\n            'c:\\test\\adir\\afile.',\n            '/usr/include/arpa/inet.',\n            '/usr/include/arpa/inet,h',\n            'c:afile.txt',\n            '..\\.\\..\\test\\afile.txt',\n            '.././../test/afile',\n            '.',\n            '..',\n            '...',\n            '/usr/lib/.../afile'\n);\n$counter = 1;\n/* loop through $paths to test each $path in the above array */\nforeach($paths as $path) {\n  echo \"-- Iteration $counter --\\n\";\n  var_dump( pathinfo($path, PATHINFO_DIRNAME) );\n  var_dump( pathinfo($path, PATHINFO_BASENAME) );\n  var_dump( pathinfo($path, PATHINFO_EXTENSION) );\n  var_dump( pathinfo($path, PATHINFO_FILENAME) );\n  var_dump( pathinfo($path) );\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
