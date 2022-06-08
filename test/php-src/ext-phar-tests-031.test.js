// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/031.phpt
  it("Phar: include and parser error", function () {
    expect(() => parser.parseCode("<?php\n$pharconfig = 3;\nrequire_once 'files/phar_oo_test.inc';\nPhar::loadPhar($fname);\n$pname = 'phar://' . $fname . '/a.php';\nvar_dump(file_get_contents($pname));\nrequire $pname;\n?>\n===DONE===")).toThrowErrorMatchingSnapshot();
  });
});
