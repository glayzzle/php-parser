// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/password_new.phpt
  it("oci_password_change()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$new_password = \"test\";\nvar_dump(oci_password_change($dbase, $user, $password, $new_password));\nvar_dump($new_c = oci_connect($user,$new_password,$dbase));\nvar_dump(oci_password_change($dbase, $user, $new_password, $password));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
