// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/imp_res_4.phpt
  it("Oracle Database 12c Implicit Result Sets: oci_fetch", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"create or replace procedure imp_res_4_proc as\n      c1 sys_refcursor;\n    begin\n        open c1 for select 1 from dual union select 2 from dual;\n        dbms_sql.return_result (c1);\n    end;\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, \"begin imp_res_4_proc(); end;\");\noci_execute($s);\noci_fetch($s);  // This will fail with ORA-24374\nvar_dump(oci_result($s, 1));\necho \"\\nTest 2\\n\";\n$s = oci_parse($c, \"begin imp_res_4_proc(); end;\");\noci_execute($s);\n$r = oci_fetch_row($s);\nvar_dump($r);\noci_fetch($s);  // This will fail with ORA-24374\nvar_dump(oci_result($s, 1));\n$r = oci_fetch_row($s);\nvar_dump($r);\n// Clean up\n$stmtarray = array(\n    \"drop procedure imp_res_4_proc\",\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
