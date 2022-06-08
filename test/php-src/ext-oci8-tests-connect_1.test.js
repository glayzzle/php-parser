// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/connect_1.phpt
  it("oci_pconnect() & oci_new_connect()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nif (!empty($dbase)) {\n    var_dump($c1 = oci_pconnect($user, $password, $dbase));\n}\nelse {\n    var_dump($c1 = oci_pconnect($user, $password));\n}\nif (!empty($dbase)) {\n    var_dump($c2 = oci_new_connect($user, $password, $dbase));\n}\nelse {\n    var_dump($c2 = oci_new_connect($user, $password));\n}\nvar_dump(oci_close($c1));\nvar_dump(oci_close($c2));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
