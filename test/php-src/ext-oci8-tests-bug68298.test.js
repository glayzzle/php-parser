// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug68298.phpt
  it("Bug #68298 (OCI int overflow)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$stmtarray = array(\n    \"DROP TABLE BUG68298\",\n    \"CREATE TABLE BUG68298 (COL1 NUMBER(20))\"\n);\noci8_test_sql_execute($c, $stmtarray);\n$s = oci_parse($c, \"INSERT INTO BUG68298 VALUES (:INTVALUE)\");\n$intvalue = 1152921504606846975;\noci_bind_by_name($s, \":INTVALUE\", $intvalue, -1, SQLT_INT);\noci_execute($s);\n$s = oci_parse($c, \"INSERT INTO BUG68298 VALUES (:INTVALUE)\");\n$intvalue = -1152921504606846975;\noci_bind_by_name($s, \":INTVALUE\", $intvalue, -1, SQLT_INT);\noci_execute($s);\n$s = oci_parse($c, \"SELECT COL1 FROM BUG68298\");\noci_execute($s);\noci_fetch_all($s, $r);\nvar_dump($r);\n$stmtarray = array(\"DROP TABLE BUG68298\");\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
