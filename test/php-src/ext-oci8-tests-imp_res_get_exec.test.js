// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/imp_res_get_exec.phpt
  it("Oracle Database 12c Implicit Result Sets: oci_get_implicit_resultset: Execute twice", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$plsql = \"declare\n      c1 sys_refcursor;\n    begin\n      open c1 for select 1 from dual union all select 2 from dual;\n      dbms_sql.return_result(c1);\n    end;\";\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, $plsql);\noci_execute($s);\n$s1 = oci_get_implicit_resultset($s);\noci_execute($s1);\noci_execute($s1);  // execute twice; should be NOP\nwhile (($row = oci_fetch_array($s1, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {\n    foreach ($row as $item) {\n        echo \"  \".$item;\n    }\n    echo \"\\n\";\n}\noci_free_statement($s);\n?>")).toMatchSnapshot();
  });
});
