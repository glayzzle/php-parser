// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/imp_res_cancel.phpt
  it("Oracle Database 12c Implicit Result Sets: oci_cancel", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$stmtarray = array(\n    \"create or replace procedure imp_res_cancel_proc as\n      c1 sys_refcursor;\n      c2 sys_refcursor;\n    begin\n      open c1 for select 1 from dual union all select 2 from dual;\n      dbms_sql.return_result(c1);\n      open c2 for select 3 from dual;\n      dbms_sql.return_result (c2);\n    end;\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, \"begin imp_res_cancel_proc(); end;\");\noci_execute($s);\nwhile (($row = oci_fetch_array($s, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {\n    foreach ($row as $item) {\n        echo \"  \".$item;\n    }\n    echo \"\\n\";\n    var_dump(oci_cancel($s));\n}\n// Clean up\n$stmtarray = array(\n    \"drop procedure imp_res_cancel_proc\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
