// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/imp_res_6.phpt
  it("Oracle Database 12c Implicit Result Sets: alternating oci_fetch_* calls", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table imp_res_6_tab\",\n    \"create table imp_res_6_tab (c1 number, c2 varchar2(10))\",\n    \"insert into imp_res_6_tab values (1, 'a')\",\n    \"insert into imp_res_6_tab values (2, 'b')\",\n    \"insert into imp_res_6_tab values (3, 'c')\",\n    \"insert into imp_res_6_tab values (4, 'd')\",\n    \"insert into imp_res_6_tab values (5, 'e')\",\n    \"insert into imp_res_6_tab values (6, 'f')\",\n    \"create or replace procedure imp_res_6_proc as\n      c1 sys_refcursor;\n    begin\n      open c1 for select * from imp_res_6_tab order by 1;\n      dbms_sql.return_result(c1);\n    end;\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, \"begin imp_res_6_proc(); end;\");\noci_execute($s);\n$row = oci_fetch_assoc($s);\nvar_dump($row);\n$row = oci_fetch_row($s);\nvar_dump($row);\n$row = oci_fetch_object($s);\nvar_dump($row);\n$row = oci_fetch_array($s);\nvar_dump($row);\n$row = oci_fetch_array($s, OCI_NUM);\nvar_dump($row);\n$row = oci_fetch_array($s, OCI_ASSOC);\nvar_dump($row);\n// Clean up\n$stmtarray = array(\n    \"drop procedure imp_res_6_proc\",\n    \"drop table imp_res_6_tab\",\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
