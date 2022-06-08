// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/array_bind_011.phpt
  it("oci_bind_array_by_name(), SQLT_CHR, default max_length and empty array", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$drop = \"DROP table bind_test\";\n$statement = oci_parse($c, $drop);\n@oci_execute($statement);\n$create = \"CREATE table bind_test(name VARCHAR(20))\";\n$statement = oci_parse($c, $create);\noci_execute($statement);\n$create_pkg = \"\nCREATE OR REPLACE PACKAGE ARRAY_BIND_011_PKG AS\n  TYPE ARRTYPE IS TABLE OF VARCHAR(20) INDEX BY BINARY_INTEGER;\n  PROCEDURE iobind(c1 IN OUT ARRTYPE);\nEND ARRAY_BIND_011_PKG;\";\n$statement = oci_parse($c, $create_pkg);\noci_execute($statement);\n$create_pkg_body = \"\nCREATE OR REPLACE PACKAGE BODY ARRAY_BIND_011_PKG AS\n  CURSOR CUR IS SELECT name FROM bind_test;\n  PROCEDURE iobind(c1 IN OUT ARRTYPE) IS\n    BEGIN\n    FOR i IN 1..5 LOOP\n      INSERT INTO bind_test VALUES (c1(i));\n    END LOOP;\n    IF NOT CUR%ISOPEN THEN\n      OPEN CUR;\n    END IF;\n    FOR i IN REVERSE 1..5 LOOP\n      FETCH CUR INTO c1(i);\n      IF CUR%NOTFOUND THEN\n        CLOSE CUR;\n        EXIT;\n      END IF;\n    END LOOP;\n  END iobind;\nEND ARRAY_BIND_011_PKG;\";\n$statement = oci_parse($c, $create_pkg_body);\noci_execute($statement);\n$statement = oci_parse($c, \"BEGIN array_bind_011_pkg.iobind(:c1); END;\");\n$array = array();\noci_bind_array_by_name($statement, \":c1\", $array, 5, -1, SQLT_CHR);\noci_execute($statement);\nvar_dump($array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
