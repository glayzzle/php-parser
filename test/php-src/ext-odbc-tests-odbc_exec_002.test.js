// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/odbc_exec_002.phpt
  it("odbc_exec(): Getting data from query", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\nodbc_exec($conn, 'CREATE DATABASE odbcTEST');\nodbc_exec($conn, 'CREATE TABLE FOO (TEST INT)');\nodbc_exec($conn, 'INSERT INTO FOO VALUES (1)');\nodbc_exec($conn, 'INSERT INTO FOO VALUES (2)');\n$res = odbc_exec($conn, 'SELECT * FROM FOO');\nvar_dump(odbc_fetch_row($res));\nvar_dump(odbc_result($res, 'test'));\nvar_dump(odbc_fetch_array($res));\n?>")).toMatchSnapshot();
  });
});
