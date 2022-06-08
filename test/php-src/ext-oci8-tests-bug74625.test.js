// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug74625.phpt
  it("Bug #74625 (Integer overflow in oci_bind_array_by_name)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n        \"CREATE TABLE bug74625_tab (NAME NUMBER)\",\n        \"CREATE OR REPLACE PACKAGE PKG74625 AS\n          TYPE ARRTYPE IS TABLE OF NUMBER INDEX BY BINARY_INTEGER;\n          PROCEDURE iobind(c1 IN OUT ARRTYPE);\n         END PKG74625;\",\n        \"CREATE OR REPLACE PACKAGE BODY PKG74625 AS\n          PROCEDURE iobind(c1 IN OUT ARRTYPE) IS\n          BEGIN\n           FOR i IN 1..5 LOOP\n            c1(i) := c1(i) * 2;\n           END LOOP;\n          END iobind;\n         END PKG74625;\"\n);\noci8_test_sql_execute($c, $stmtarray);\n$statement = oci_parse($c, \"BEGIN pkg74625.iobind(:c1); END;\");\n$array = Array(-1,-2,-3,-4,-5);\noci_bind_array_by_name($statement, \":c1\", $array, 5, -1, SQLT_INT);\noci_execute($statement);\nvar_dump($array);\n// Cleanup\n$stmtarray = array(\n    \"DROP TABLE bug74625_tab\",\n    \"DROP PACKAGE PKG74625\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
