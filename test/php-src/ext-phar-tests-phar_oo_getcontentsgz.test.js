// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_getcontentsgz.phpt
  it("Phar object: getContent() (verify it works with compression)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.phar.php';\n$phar = new Phar($fname);\n$phar['a'] = 'file contents\nthis works';\n$phar['a']->compress(Phar::GZ);\ncopy($fname, $fname2);\n$phar2 = new Phar($fname2);\nvar_dump($phar2['a']->isCompressed());\necho $phar2['a']->getContent() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
