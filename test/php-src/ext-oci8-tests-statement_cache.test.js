// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/statement_cache.phpt
  it("statement cache", function () {
    expect(parser.parseCode("<?php\n// Note: with TimesTen, the column will be called \"EXP\"\nrequire __DIR__.\"/connect.inc\";\n$pc = oci_pconnect($user, $password, $dbase);\n$stmt = oci_parse($pc, \"select 1+3 from dual\");\noci_execute($stmt);\nvar_dump(oci_fetch_array($stmt));\n$stmt = oci_parse($pc, \"select 1+3 from dual\");\noci_execute($stmt);\nvar_dump(oci_fetch_array($stmt));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
