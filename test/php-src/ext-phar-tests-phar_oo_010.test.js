// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_010.phpt
  it("Phar object: ArrayAccess and isset", function () {
    expect(parser.parseCode("<?php\n$pharconfig = 0;\nrequire_once 'files/phar_oo_test.inc';\n$phar = new Phar($fname);\nvar_dump(isset($phar['a.php']));\nvar_dump(isset($phar['b.php']));\nvar_dump(isset($phar['b/c.php']));\nvar_dump(isset($phar['b/d.php']));\nvar_dump(isset($phar['e.php']));\n?>\n===DIR===\n<?php\nvar_dump(isset($phar['b']));\n?>\n===NA===\n<?php\nvar_dump(isset($phar['a']));\nvar_dump(isset($phar['b/c']));\nvar_dump(isset($phar[12]));\nvar_dump(isset($phar['b']));\n?>")).toMatchSnapshot();
  });
});
