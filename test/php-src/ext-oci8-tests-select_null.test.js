// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/select_null.phpt
  it("SELECTing NULL values", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$pc = oci_pconnect($user, $password, $dbase);\n$stmt = oci_parse($pc, \"select NULL from dual\");\noci_execute($stmt);\nvar_dump(oci_fetch_array($stmt, OCI_RETURN_NULLS));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
