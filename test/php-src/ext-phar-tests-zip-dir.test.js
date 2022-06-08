// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/dir.phpt
  it("Phar: mkdir/rmdir test zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip.php';\n$pname = 'phar://' . $fname;\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.1.phar.php';\n$pname2 = 'phar://' . $fname2;\n$fname3 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.phar.php';\n$pname3 = 'phar://' . $fname3;\n$phar = new Phar($fname);\nvar_dump($phar->isFileFormat(Phar::ZIP));\n$phar->addEmptyDir('test');\nvar_dump($phar['test']->isDir());\nvar_dump($phar['test/']->isDir());\ncopy($fname, $fname2);\nmkdir($pname . '/another/dir/');\nvar_dump($phar['another/dir']->isDir());\nrmdir($pname . '/another/dir/');\ncopy($fname, $fname3);\nclearstatcache();\nvar_dump(file_exists($pname . '/another/dir/'));\nvar_dump(file_exists($pname2 . '/test/'));\nvar_dump(file_exists($pname3 . '/another/dir/'));\n?>")).toMatchSnapshot();
  });
});
