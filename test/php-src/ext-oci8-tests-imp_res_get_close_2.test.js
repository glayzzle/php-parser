// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/imp_res_get_close_2.phpt
  it("Oracle Database 12c Implicit Result Sets: oci_get_implicit_resultset: oci_free_statement #2", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$plsql =\n    \"declare\n      c1 sys_refcursor;\n    begin\n      open c1 for select 1 from dual union all select 2 from dual;\n      dbms_sql.return_result(c1);\n      open c1 for select 3 from dual union all select 4 from dual;\n      dbms_sql.return_result(c1);\n      open c1 for select 5 from dual union all select 6 from dual;\n      dbms_sql.return_result(c1);\n    end;\";\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, $plsql);\noci_execute($s);\ntry {\n    while (($s1 = oci_get_implicit_resultset($s))) {\n        while (($row = oci_fetch_array($s1, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {\n            foreach ($row as $item) {\n                echo \"  \".$item;\n            }\n            echo \"\\n\";\n            oci_free_statement($s);  // close parent\n        }\n    }\n} catch(\\TypeError $exception) {\n    var_dump($exception->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
