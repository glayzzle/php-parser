// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/mkdir.phpt
  it("phar: mkdir/rmdir edge cases", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\nPhar::interceptFileFuncs();\nmkdir('phar://');\nmkdir('phar://foo.phar');\n$a = new Phar($fname);\n$a['a'] = 'hi';\nmkdir($pname . '/a');\nrmdir('phar://');\nrmdir('phar://foo.phar');\nrmdir($pname . '/a');\n$a->addEmptyDir('bb');\n$a->addEmptyDir('bb');\ntry {\n$a->addEmptyDir('.phar');\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
