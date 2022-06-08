// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/connect_with_charset_001.phpt
  it("oci_connect() with invalid character set", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nvar_dump($c1 = oci_connect($user, $password, $dbase));\nvar_dump($c2 = oci_connect($user, $password, $dbase, \"\"));\nvar_dump($c3 = oci_connect($user, $password, $dbase, \"blah\"));\nvar_dump($c4 = oci_connect($user, $password, $dbase, \"obviously wrong\"));\nvar_dump($c3 == $c4);\nvar_dump($c5 = oci_connect($user, $password, $dbase, \"US7ASCII\"));\nvar_dump($c6 = oci_connect($user, $password, $dbase, \"UTF8\"));\nvar_dump($c5 == $c6);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
