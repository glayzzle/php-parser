// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/cursor_bind.phpt
  it("bind and fetch cursor from a statement", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialization\n$stmtarray = array(\n    \"drop table cursor_bind_tab\",\n    \"create table cursor_bind_tab (id NUMBER, value VARCHAR(20))\",\n    \"insert into cursor_bind_tab values (1, '1')\",\n    \"insert into cursor_bind_tab values (1, '1')\",\n    \"insert into cursor_bind_tab values (1, '1')\"\n);\noci8_test_sql_execute($c, $stmtarray);\n$sql = \"\nDECLARE\nTYPE curtype IS REF CURSOR;\ncursor_var curtype;\nBEGIN\n    OPEN cursor_var FOR SELECT id, value FROM cursor_bind_tab;\n    :curs := cursor_var;\nEND;\n\";\n$stmt = oci_parse($c, $sql);\n$cursor = oci_new_cursor($c);\noci_bind_by_name($stmt, \":curs\", $cursor, -1, OCI_B_CURSOR);\noci_execute($stmt);\noci_execute($cursor);\nvar_dump(oci_fetch_row($cursor));\nvar_dump(oci_fetch_row($cursor));\nvar_dump(oci_fetch_row($cursor));\nvar_dump(oci_fetch_row($cursor));\n// Clean up\n$stmtarray = array(\n    \"drop table cursor_bind_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
