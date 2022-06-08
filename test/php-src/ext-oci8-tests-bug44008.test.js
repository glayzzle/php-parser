// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug44008.phpt
  it("Bug #44008 (Incorrect usage of OCILob->close crashes PHP)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n// Initialization\n$stmtarray = array(\n        \"create or replace procedure bug44008_proc (p in out clob)\n        as begin p := 'A';\n        end;\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\n$s = oci_parse($c, 'begin bug44008_proc(:data); end;');\n$textLob = oci_new_descriptor($c, OCI_D_LOB);\noci_bind_by_name($s, \":data\", $textLob, -1, OCI_B_CLOB);\noci_execute($s, OCI_DEFAULT);\n$r = $textLob->load();\necho \"$r\\n\";\n// Incorrectly closing the lob doesn't cause a crash.\n// OCI-LOB->close() is documented for use only with OCILob->writeTemporary()\n$textLob->close();\n// Cleanup\n$stmtarray = array(\n        \"drop procedure bug44008_proc\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
