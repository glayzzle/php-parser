// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/error.phpt
  it("oci_error() error message for parsing error", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nif (!empty($dbase)) {\n    var_dump(oci_connect($user, $password, $dbase));\n}\nelse {\n    var_dump(oci_connect($user, $password));\n}\nvar_dump($s = oci_parse($c, \"WRONG SYNTAX\"));\nvar_dump(oci_execute($s));\nvar_dump(oci_error($s));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
