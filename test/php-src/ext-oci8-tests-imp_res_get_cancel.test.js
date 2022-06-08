// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/imp_res_get_cancel.phpt
  it("Oracle Database 12c Implicit Result Sets: oci_get_implicit_resultset: oci_cancel", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$plsql =\n    \"declare\n      c1 sys_refcursor;\n      c2 sys_refcursor;\n    begin\n      open c1 for select 1 from dual union all select 2 from dual;\n      dbms_sql.return_result(c1);\n      open c2 for select 3 from dual;\n      dbms_sql.return_result (c2);\n    end;\";\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, $plsql);\noci_execute($s);\nwhile (($s1 = oci_get_implicit_resultset($s))) {\n    while (($row = oci_fetch_array($s1, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {\n        foreach ($row as $item) {\n            echo \"  \".$item;\n        }\n        echo \"\\n\";\n        oci_cancel($s1);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
