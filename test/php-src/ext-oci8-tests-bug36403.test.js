// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug36403.phpt
  it("Bug #36403 (oci_execute no longer supports OCI_DESCRIBE_ONLY)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table bug36403_tab\",\n    \"create table bug36403_tab (c1 number, col2 number, column3 number, col4 number)\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, \"select * from bug36403_tab\");\noci_execute($s, OCI_DESCRIBE_ONLY);\nfor ($i = oci_num_fields($s); $i > 0; $i--) {\n    echo oci_field_name($s, $i) . \"\\n\";\n}\necho \"Test 2\\n\";\n// Should generate an error: ORA-24338: statement handle not executed\n// since the statement handle was only described and not executed\n$row = oci_fetch_array($s);\n// Clean up\n$stmtarray = array(\n    \"drop table bug36403_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
