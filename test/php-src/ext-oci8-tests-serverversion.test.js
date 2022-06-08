// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/serverversion.phpt
  it("oci_server_version()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nif (!empty($dbase)) {\n    var_dump($c = oci_connect($user, $password, $dbase));\n}\nelse {\n    var_dump($c = oci_connect($user, $password));\n}\n$v = oci_server_version($c);\nvar_dump(str_replace(\"\\n\", \"\", $v));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
