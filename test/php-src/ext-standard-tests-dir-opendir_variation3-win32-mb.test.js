// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/opendir_variation3-win32-mb.phpt
  it("Test opendir() function : usage variations - open a directory twice", function () {
    expect(parser.parseCode("<?php\n/*\n * Call opendir() twice with the same directory as $path argument\n */\necho \"*** Testing opendir() : usage variation ***\\n\";\n$path = __DIR__ . \"/私はガラスを食べられますopendir_variation3\";\nmkdir($path);\necho \"\\n-- Open directory first time: --\\n\";\nvar_dump($dh1 = opendir($path));\necho \"\\n-- Open directory second time: --\\n\";\nvar_dump($dh2 = opendir($path));\nif ($dh1 !== $dh2) {\n    echo \"\\nNew resource created\\n\";\n} else {\n    echo \"\\nNo new resource created\\n\";\n}\nclosedir($dh1);\nclosedir($dh2);\n?>")).toMatchSnapshot();
  });
});
