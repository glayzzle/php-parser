// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/fetch_all5.phpt
  it("Test oci_fetch_all with 0 and -1 skip & maxrows", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table fetch_all5_tab\",\n    \"create table fetch_all5_tab (mycol1 number, mycol2 varchar2(20))\",\n    \"insert into fetch_all5_tab values (1, 'abc')\",\n    \"insert into fetch_all5_tab values (2, 'def')\",\n    \"insert into fetch_all5_tab values (3, 'ghi')\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, \"select * from fetch_all5_tab order by 1\");\noci_execute($s);\n$r = oci_fetch_all($s, $res, 0, -1);\nvar_dump($r);\nvar_dump($res);\necho \"Test 1\\n\";\n$s = oci_parse($c, \"select * from fetch_all5_tab order by 1\");\noci_execute($s);\n$r = oci_fetch_all($s, $res, 0, 0);\nvar_dump($r);\nvar_dump($res);\necho \"Test 3\\n\";\n$s = oci_parse($c, \"select * from fetch_all5_tab order by 1\");\noci_execute($s);\n$r = oci_fetch_all($s, $res, -1, 0);\nvar_dump($r);\nvar_dump($res);\n// Clean up\n$stmtarray = array(\n    \"drop table fetch_all5_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\noci_close($c);\n?>")).toMatchSnapshot();
  });
});
