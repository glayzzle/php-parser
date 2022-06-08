// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/persistent.phpt
  it("reusing persistent connections", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nvar_dump(oci_pconnect($user, $password, $dbase));\nvar_dump(oci_pconnect($user, $password, $dbase));\nvar_dump(oci_pconnect($user, $password, $dbase));\nvar_dump(oci_connect($user, $password, $dbase));\nvar_dump(oci_connect($user, $password, $dbase));\nvar_dump(oci_connect($user, $password, $dbase));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
