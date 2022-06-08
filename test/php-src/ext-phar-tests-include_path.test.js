// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/include_path.phpt
  it("Phar: include_path with phar:// wrapper", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/tempmanifest1.phar.php';\n$a = new Phar($fname);\n$a['file1.php'] = 'file1.php\n';\n$a['test/file1.php'] = 'test/file1.php\n';\nunset($a);\nset_include_path('.' . PATH_SEPARATOR . 'phar://' . $fname);\ninclude 'file1.php';\nset_include_path('.' . PATH_SEPARATOR . 'phar://' . $fname . '/test');\ninclude 'file1.php';\ninclude 'file2.php';\n?>")).toMatchSnapshot();
  });
});
