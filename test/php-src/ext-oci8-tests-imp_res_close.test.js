// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/imp_res_close.phpt
  it("Oracle Database 12c Implicit Result Sets: oci_free_statement #1", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"create or replace procedure imp_res_close_proc as\n      c1 sys_refcursor;\n    begin\n      open c1 for select 1 from dual union all select 2 from dual order by 1;\n      dbms_sql.return_result(c1);\n      open c1 for select 3 from dual union all select 4 from dual order by 1;\n      dbms_sql.return_result(c1);\n      open c1 for select 5 from dual union all select 6 from dual order by 1;\n      dbms_sql.return_result(c1);\n    end;\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, \"begin imp_res_close_proc(); end;\");\noci_execute($s);\ntry {\n    while (($row = oci_fetch_array($s, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {\n        foreach ($row as $item) {\n            echo \"  \".$item;\n        }\n        echo \"\\n\";\n        oci_free_statement($s);  // Free the implicit result handle\n    }\n} catch(\\TypeError $exception) {\n    var_dump($exception->getMessage());\n}\n// Clean up\n$stmtarray = array(\n    \"drop procedure imp_res_close_proc\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
