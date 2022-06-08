// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bind_query.phpt
  it("Bind with various WHERE conditions", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table bind_query_tab\",\n    \"create table bind_query_tab (empno number(4), ename varchar2(10), sal number(7,2))\",\n    \"insert into bind_query_tab values (7934, 'MILLER', 1300)\",\n    \"insert into bind_query_tab values (7902, 'FORD', 3000)\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1\\n\";\n$e = 7934;\n$s = oci_parse($c, \"select ename from bind_query_tab where empno = :eno\");\noci_bind_by_name( $s, \":eno\", $e, -1, SQLT_INT);\noci_execute($s);\nvar_dump(oci_fetch_row($s));\necho \"Test 2\\n\";\n$v = 1000;\n$s = oci_parse($c, 'select ename from bind_query_tab where sal > :v order by ename');\noci_bind_by_name( $s, \":v\", $v);\noci_define_by_name($s, \"ENAME\", $ename, 20);\noci_execute($s);\nwhile (oci_fetch($s)) {\n    var_dump($ename);\n}\necho \"Test 3\\n\";\n$s = oci_parse($c, 'select ename from bind_query_tab where sal > :v order by ename');\noci_bind_by_name( $s, \":v\", $v);\n$v = 2000;\noci_define_by_name($s, \"ENAME\", $ename, 20);\noci_execute($s);\nwhile (oci_fetch($s)) {\n    var_dump($ename);\n}\n// Clean up\n$stmtarray = array(\n    \"drop table bind_query_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
