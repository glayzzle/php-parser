// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/largezip.phpt
  it("Phar: large zip file (zip edge cases)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.phar.zip.php';\n$pname = 'phar://' . $fname;\n$pname2 = 'phar://' . $fname2;\n$p = new Phar($fname);\n$p['big'] = str_repeat(str_repeat('hi', 100), 1000);\n$p['big2'] = str_repeat(str_repeat('hi', 100), 1000);\ncopy($fname, $fname2);\n$p2 = new Phar($fname2);\nvar_dump(strlen($p2['big']->getContent()));\n?>")).toMatchSnapshot();
  });
});
