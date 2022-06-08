// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug69975.phpt
  it("Bug #69975 (PHP segfaults when accessing nvarchar(max) defined columns)", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\n@odbc_exec($conn, 'CREATE DATABASE odbcTEST');\nodbc_exec($conn, 'CREATE TABLE FOO (ID INT, VARCHAR_COL NVARCHAR(MAX))');\nodbc_exec($conn, \"INSERT INTO FOO VALUES (1, 'foo')\");\n$result = odbc_exec($conn, \"SELECT VARCHAR_COL FROM FOO\");\nvar_dump(odbc_fetch_array($result));\necho \"ready\";\n?>")).toMatchSnapshot();
  });
});
