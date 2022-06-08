// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/imp_res_call_error.phpt
  it("Oracle Database 12c Implicit Result Sets: using SQL 'CALL'", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"create or replace procedure imp_res_call_err_proc as\n      c1 sys_refcursor;\n    begin\n      open c1 for select * from dual;\n      dbms_sql.return_result(c1);\n      open c1 for select * from dual;\n      dbms_sql.return_result (c1);\n    end;\");\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, \"call imp_res_call_err_proc()\");\noci_execute($s);\n// Clean up\n$stmtarray = array(\n    \"drop procedure imp_res_call_err_proc\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
