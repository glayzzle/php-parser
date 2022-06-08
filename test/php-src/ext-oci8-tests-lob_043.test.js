// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_043.phpt
  it("Bug #49560 (LOB resource destructor and refcount test)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"drop table lob_043_tab\",\n    \"create table lob_043_tab(id number, c1 clob)\",\n    \"begin\n       for i in 1..50000 loop\n         insert into lob_043_tab (id, c1) values (i, i || ' abcdefghijklmnopq');\n      end loop;\n     end;\",\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\nfunction f1($c)\n{\n    $s = oci_parse($c, 'select id, c1 from lob_043_tab order by id');\n    oci_execute($s);\n    $r = array();\n    while (($row = oci_fetch_array($s, OCI_RETURN_NULLS+OCI_ASSOC+OCI_RETURN_LOBS)) !== false) {\n        $r[] = $row['C1'];\n    }\n    echo \"f1 ended\\n\";\n    return $r;\n}\nfunction f2($c)\n{\n    $s = oci_parse($c, 'select id, c1 from lob_043_tab order by id');\n    oci_execute($s);\n    $r = array();\n    while (($row = oci_fetch_array($s, OCI_RETURN_NULLS+OCI_ASSOC)) !== false) {\n        $r[] = $row['C1'];\n    }\n    echo \"f2 ended\\n\";\n    return $r;\n}\necho \"Test 1\\n\";\n$r = f1($c);\n/*\n  foreach ($r as $v) {\n  echo $v, \"\\n\";\n  }\n*/\necho \"Test 2\\n\";\n$r = f2($c);\n/*\n  foreach ($r as $v) {\n  echo $v->load(), \"\\n\";\n  }\n*/\n// Clean up\n$stmtarray = array(\n    \"drop table lob_043_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\noci_close($c);\n?>")).toMatchSnapshot();
  });
});
