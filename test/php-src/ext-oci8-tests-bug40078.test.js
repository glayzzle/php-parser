// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug40078.phpt
  it("Bug #40078 (ORA-01405 when fetching NULL values using oci_bind_array_by_name())", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$create_pkg = \"\nCREATE OR REPLACE PACKAGE BUG40078_PKG AS\n    TYPE ARRTYPE IS TABLE OF VARCHAR(20) INDEX BY BINARY_INTEGER;\n    PROCEDURE nullbind(c1 OUT ARRTYPE);\nEND BUG40078_PKG;\";\n$statement = oci_parse($c, $create_pkg);\noci_execute($statement);\n$create_pkg_body = \"\nCREATE OR REPLACE PACKAGE BODY BUG40078_PKG AS\n    PROCEDURE nullbind(c1 OUT ARRTYPE) IS\n    BEGIN\n        c1(1) := 'one';\n        c1(2) := 'two';\n        c1(3) := '';\n        c1(4) := 'four';\n        c1(5) := 'five';\n    END nullbind;\nEND BUG40078_PKG;\";\n$statement = oci_parse($c, $create_pkg_body);\noci_execute($statement);\n$statement = oci_parse($c, \"BEGIN bug40078_pkg.nullbind(:c1); END;\");\noci_bind_array_by_name($statement, \":c1\", $array, 5, 20, SQLT_CHR);\noci_execute($statement);\nvar_dump($array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
