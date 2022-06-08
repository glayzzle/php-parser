// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug42496_2.phpt
  it("Bug #42496 (LOB fetch leaks cursors, eventually failing with ORA-1000 maximum open cursors reached)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n// Initialization\n$stmtarray = array(\n    \"DROP table bug42496_2_tab\",\n    \"CREATE table bug42496_2_tab(c1 CLOB, c2 CLOB)\",\n    \"INSERT INTO bug42496_2_tab VALUES('test1', 'test1')\",\n    \"INSERT INTO bug42496_2_tab VALUES('test2', 'test2')\",\n    \"INSERT INTO bug42496_2_tab VALUES('test3', 'test3')\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\necho \"Test 2\\n\";\nfor ($i = 0; $i < 15000; $i++) {\n    $s = oci_parse($c, \"SELECT * from bug42496_2_tab\");\n    if (oci_execute($s)) {\n        $arr = array();\n        while ($arr = oci_fetch_assoc($s)) {\n            $arr['C1']->free();\n            $arr['C2']->free();\n        }\n    }\n    oci_free_statement($s);\n}\necho \"Done\\n\";\n// Cleanup\n$stmtarray = array(\n    \"DROP table bug42496_2_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
