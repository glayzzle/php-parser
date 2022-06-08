// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/imp_res_func_error.phpt
  it("Oracle Database 12c Implicit Result Sets: test with a PL/SQL function", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"create or replace function imp_res_func_error return number as\n      c1 sys_refcursor;\n    begin\n      open c1 for select * from dual;\n      dbms_sql.return_result(c1);\n      return 1234;\n    end;\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, \"select imp_res_func_error from dual\");\n$r = oci_execute($s);   // This will fail with ORA-29478 in Oracle 12.1\nif ($r) {\n    while (($row = oci_fetch_array($s, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {\n        foreach ($row as $item) {\n            echo \"  \".$item;\n        }\n        echo \"\\n\";\n    }\n}\n// Clean up\n$stmtarray = array(\n    \"drop function imp_res_func_error\",\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
