// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug69354.phpt
  it("Bug #69354 Incorrect use of SQLColAttributes with ODBC 3.0", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\n@odbc_exec($conn, 'CREATE DATABASE odbcTEST');\nodbc_exec($conn, 'CREATE TABLE FOO (ID INT, VARCHAR_COL VARCHAR(100))');\nodbc_exec($conn, \"INSERT INTO FOO(ID, VARCHAR_COL) VALUES (1, '\" . str_repeat(\"a\", 100) . \"')\");\n$res = odbc_exec($conn,\"select VARCHAR_COL from FOO\");\nif ($res) {\n    if (odbc_fetch_row($res)) {\n        $ret = odbc_result($res,'varchar_col');\n        echo strlen($ret), \"\\n\";\n        echo $ret[0], \"\\n\";\n        echo $ret[strlen($ret)-1], \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
