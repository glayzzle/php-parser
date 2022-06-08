// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/cursor_bind_err.phpt
  it("binding a cursor (with errors)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialize\n$stmtarray = array(\n    \"drop table cursor_bind_err_tab\",\n    \"create table cursor_bind_err_tab (id number, value number)\",\n    \"insert into cursor_bind_err_tab (id, value) values (1,1)\",\n    \"insert into cursor_bind_err_tab (id, value) values (1,1)\",\n    \"insert into cursor_bind_err_tab (id, value) values (1,1)\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\n$sql = \"select cursor(select * from cursor_bind_err_tab) into :cursor from dual\";\n$stmt = oci_parse($c, $sql);\n$cursor = oci_new_cursor($c);\noci_bind_by_name($stmt, \":cursor\", $cursor, -1, OCI_B_CURSOR);\noci_execute($stmt);\noci_execute($cursor);\nvar_dump(oci_fetch_assoc($cursor));\n// Cleanup\n$stmtarray = array(\n    \"drop table cursor_bind_err_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
