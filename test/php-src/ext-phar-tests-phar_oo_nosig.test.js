// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_nosig.phpt
  it("Phar::getSignature() no signature", function () {
    expect(parser.parseCode("<?php\nrequire_once 'files/phar_oo_test.inc';\n$phar = new Phar($fname);\nvar_dump($phar->getSignature());\n?>")).toMatchSnapshot();
  });
});
