// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/fetch_object_2.phpt
  it("oci_fetch_object() with CLOB and NULL", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table fetch_object_2_tab\",\n    \"create table fetch_object_2_tab (col1 number, col2 CLOB, col3 varchar2(15))\",\n    \"insert into fetch_object_2_tab values (123, '1st row col2 string', '1 more text')\",\n    \"insert into fetch_object_2_tab values (456, '2nd row col2 string', NULL)\",\n    \"insert into fetch_object_2_tab values (789, '3rd row col2 string', '3 more text')\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1\\n\";\nif (!($s = oci_parse($c, 'select * from fetch_object_2_tab order by 1'))) {\n    die(\"oci_parse(select) failed!\\n\");\n}\nif (!oci_execute($s)) {\n    die(\"oci_execute(select) failed!\\n\");\n}\nwhile ($row = oci_fetch_object($s)) {\n    var_dump($row);\n}\necho \"Test 2\\n\";\nif (!($s = oci_parse($c, 'select * from fetch_object_2_tab order by 1'))) {\n    die(\"oci_parse(select) failed!\\n\");\n}\nif (!oci_execute($s)) {\n    die(\"oci_execute(select) failed!\\n\");\n}\nwhile ($row = oci_fetch_object($s)) {\n    echo $row->COL1 . \"\\n\";\n    echo $row->COL2->load() . \"\\n\";\n    echo $row->COL3 . \"\\n\";\n}\n// Clean up\n$stmtarray = array(\n    \"drop table fetch_object_2_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
