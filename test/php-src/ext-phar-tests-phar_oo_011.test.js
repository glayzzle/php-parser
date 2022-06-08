// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_011.phpt
  it("Phar object: add file", function () {
    expect(parser.parseCode("<?php\n$pharconfig = 0;\nrequire_once 'files/phar_oo_test.inc';\n$phar = new Phar($fname);\n$phar->setInfoClass('SplFileObject');\n$phar['hi/f.php'] = 'hi';\nvar_dump(isset($phar['hi']));\nvar_dump(isset($phar['hi/f.php']));\necho $phar['hi/f.php'];\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
