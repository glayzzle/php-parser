// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_012_confirm.phpt
  it("Phar object: unset file (confirm disk file is changed)", function () {
    expect(parser.parseCode("<?php\n$pharconfig = 0;\nrequire_once 'files/phar_oo_test.inc';\n$phar = new Phar($fname);\n$phar->setInfoClass('SplFileObject');\n$phar['f.php'] = 'hi';\nvar_dump(isset($phar['f.php']));\necho $phar['f.php'];\necho \"\\n\";\n$md5 = md5_file($fname);\nunset($phar['f.php']);\n$md52 = md5_file($fname);\nif ($md5 == $md52) echo 'File on disk has not changed';\nvar_dump(isset($phar['f.php']));\n?>")).toMatchSnapshot();
  });
});
