// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/imp_res_get_all.phpt
  it("Oracle Database 12c Implicit Result Sets: oci_get_implicit_resultset: oci_fetch_all", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$plsql = \"declare\n           c1 sys_refcursor;\n          begin\n            open c1 for select 1 from dual union all select 2 from dual;\n            dbms_sql.return_result(c1);\n            open c1 for select 3 from dual union all select 4 from dual;\n            dbms_sql.return_result(c1);\n            open c1 for select 5 from dual union all select 6 from dual;\n            dbms_sql.return_result(c1);\n          end;\";\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, $plsql);\noci_execute($s);\n$s1 = oci_get_implicit_resultset($s);\noci_fetch_all($s1, $res);\nvar_dump($res);\n$s2 = oci_get_implicit_resultset($s);\noci_fetch_all($s2, $res);\nvar_dump($res);\n$s3 = oci_get_implicit_resultset($s);\noci_fetch_all($s3, $res);\nvar_dump($res);\necho \"\\nTest 2\\n\";\n$s = oci_parse($c, $plsql);\noci_execute($s);\nwhile (($s1 = oci_get_implicit_resultset($s))) {\n    $r = oci_fetch_all($s1, $res);\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
