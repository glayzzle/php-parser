// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bind_sqltchr_2.phpt
  it("PL/SQL bind with SQLT_CHR", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"create or replace procedure bind_sqltchr_proc (msg_in in varchar2, msg_out out varchar2)\n    as\n    begin\n      msg_out := upper(msg_in);\n    end;\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1 - PL/SQL IN and OUT variables\\n\";\n$stmt = oci_parse($c, \"BEGIN bind_sqltchr_proc(:a, :b); END;\");\n$msg_in = \"Cat got your keyboard?\";\noci_bind_by_name($stmt, \":a\", $msg_in, -1, SQLT_CHR);\noci_bind_by_name($stmt, \":b\", $msg_out, 800, SQLT_CHR);\noci_execute($stmt);\nvar_dump($msg_in);\nvar_dump($msg_out);\n// Clean up\n$stmtarray = array(\n    \"drop procedure bind_sqltchr_proc\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
