// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug26133.phpt
  it("Bug #26133 (ocifreedesc() segfault)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialize\n$stmtarray = array(\n    \"drop table bug26133_tab\",\n    \"create table bug26133_tab (id number, value number)\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\n$ora_sql = \"INSERT INTO bug26133_tab (id, value) VALUES (1,'1') RETURNING ROWID INTO :v_rowid \";\n$statement = oci_parse($c,$ora_sql);\n$rowid = oci_new_descriptor($c,OCI_D_ROWID);\noci_bind_by_name($statement,\":v_rowid\", $rowid,-1,OCI_B_ROWID);\nif (oci_execute($statement)) {\n    oci_commit($c);\n}\noci_free_statement($statement);\n$rowid->free();\n// Cleanup\n$stmtarray = array(\n    \"drop table bug26133_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
