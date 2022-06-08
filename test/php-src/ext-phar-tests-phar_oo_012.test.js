// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_012.phpt
  it("Phar object: unset file", function () {
    expect(parser.parseCode("<?php\n$pharconfig = 0;\nrequire_once 'files/phar_oo_test.inc';\n$phar = new Phar($fname);\n$phar->setInfoClass('SplFileObject');\n$phar['f.php'] = 'hi';\nvar_dump(isset($phar['f.php']));\necho $phar['f.php'];\necho \"\\n\";\nunset($phar['f.php']);\nvar_dump(isset($phar['f.php']));\n?>")).toMatchSnapshot();
  });
});
