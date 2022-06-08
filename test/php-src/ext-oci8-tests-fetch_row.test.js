// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/fetch_row.phpt
  it("oci_fetch_row()", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n// Initialize\n$stmtarray = array(\n    \"drop table fetch_row_tab\",\n    \"create table fetch_row_tab (id number, value number)\",\n    \"insert into fetch_row_tab (id, value) values (1,1)\",\n    \"insert into fetch_row_tab (id, value) values (1,1)\",\n    \"insert into fetch_row_tab (id, value) values (1,1)\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\nif (!($s = oci_parse($c, \"select * from fetch_row_tab\"))) {\n    die(\"oci_parse(select) failed!\\n\");\n}\nif (!oci_execute($s)) {\n    die(\"oci_execute(select) failed!\\n\");\n}\nwhile ($row = oci_fetch_row($s)) {\n    var_dump($row);\n}\n// Cleanup\n$stmtarray = array(\n    \"drop table fetch_row_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
