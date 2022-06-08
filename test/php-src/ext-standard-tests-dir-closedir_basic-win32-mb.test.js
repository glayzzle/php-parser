// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/closedir_basic-win32-mb.phpt
  it("Test closedir() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of closedir()\n */\necho \"*** Testing closedir() : basic functionality ***\\n\";\n$base_dir = __DIR__;\n$dir_path = $base_dir . '/私はガラスを食べられますclosedir_basic';\nmkdir($dir_path);\necho \"\\n-- Call closedir() with no arguments: --\\n\";\n$dh1 = opendir($dir_path);\nvar_dump(closedir());\necho \"-- Check Directory Handle: --\\n\";\nvar_dump($dh1);\necho \"\\n-- Call closedir() with \\$dir_handle argument supplied: --\\n\";\n$dh2 = opendir($dir_path);\nif ((int)$dh1 === (int)$dh2) {\n    echo \"\\nNo new resource created\\n\";\n}\nvar_dump(closedir($dh2));\necho \"-- Check Directory Handle: --\\n\";\nvar_dump($dh2);\n?>")).toMatchSnapshot();
  });
});
