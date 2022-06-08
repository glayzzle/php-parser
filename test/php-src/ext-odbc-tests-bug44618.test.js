// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug44618.phpt
  it("Bug #44618 (Fetching may rely on uninitialized data)", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . \"/config.inc\";\n$conn = odbc_connect($dsn, $user, $pass, SQL_CUR_USE_ODBC);\nodbc_exec($conn, \"CREATE TABLE bug44618(ID INT, real1 REAL, text1 TEXT)\");\nodbc_exec($conn, \"INSERT INTO bug44618 VALUES (1, 10.0199995, 'testing 1,2,3')\");\n$result = odbc_exec($conn, \"SELECT * FROM bug44618\");\nvar_dump(odbc_fetch_array($result));\n$result = null;\n$result = odbc_exec($conn, \"SELECT * FROM bug44618\");\nodbc_fetch_into($result, $array);\nvar_dump($array);\n$result = null;\n$result = odbc_exec($conn, \"SELECT * FROM bug44618\");\nodbc_fetch_row($result);\nvar_dump(odbc_result($result, \"text1\"));\n$result = null;\n$result = odbc_exec($conn, \"SELECT * FROM bug44618\");\nodbc_result_all($result);\n$result = null;\n?>")).toMatchSnapshot();
  });
});
