// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug71171.phpt
  it("Bug #71171 odbc_fetch_array generates SIGFAULT, variant 0", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\n@odbc_exec($conn, 'CREATE DATABASE odbcTEST');\nodbc_exec($conn, 'CREATE TABLE FOO (ID INT, VARCHAR_COL NVARCHAR(40))');\nodbc_exec($conn, \"INSERT INTO FOO(ID, VARCHAR_COL) VALUES (1, '\" . chr(0x81) . \"')\");\n$res = odbc_exec($conn,\"SELECT ID FROM FOO WHERE VARCHAR_COL = '\" . chr(0x81) . \"'\");\nif ($res) {\n    while($record = odbc_fetch_array($res)) var_dump($record);\n}\nodbc_close($conn);\n?>")).toMatchSnapshot();
  });
});
