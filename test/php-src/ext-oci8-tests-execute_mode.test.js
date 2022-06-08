// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/execute_mode.phpt
  it("oci_execute() and invalid execute mode", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$pc = oci_pconnect($user, $password, $dbase);\n$stmt = oci_parse($pc, \"select NULL from dual\");\noci_execute($stmt, -1);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
