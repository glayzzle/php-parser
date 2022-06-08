// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/fetch_all4.phpt
  it("Test oci_fetch_* array overwriting when query returns no rows", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table fetch_all4_tab\",\n    \"create table fetch_all4_tab (mycol1 number, mycol2 varchar2(20))\",\n    \"insert into fetch_all4_tab values (1, 'abc')\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, \"select * from fetch_all4_tab where 1 = 0\");\noci_execute($s);\n$res = array(1,2,3);  // this array is replaced as a result of the query\n$r = oci_fetch_all($s, $res);\nvar_dump($r);\nvar_dump($res);\necho \"Test 2\\n\";\n$s = oci_parse($c, \"select * from fetch_all4_tab where 1 = 0\");\noci_execute($s);\n$row = array(1,2,3);  // this array is replaced as a result of the query\n$row = oci_fetch_array($s);\nvar_dump($row);\n// Clean up\n$stmtarray = array(\n    \"drop table fetch_all4_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
