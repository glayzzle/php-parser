// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug73725.phpt
  it("Bug #73725 Unable to retrieve value of varchar(max) type", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . \"/config.inc\";\n$conn = odbc_connect($dsn, $user, $pass);\nodbc_do($conn, \"CREATE TABLE bug73725(i int, txt varchar(max), k int)\");\nodbc_do($conn, \"INSERT INTO bug73725 VALUES(101,'Any text', 33)\");\nodbc_do($conn, \"INSERT INTO bug73725 VALUES(102,'Müsliriegel', 34)\");\n$rc = odbc_do($conn, \"SELECT i, txt, k FROM bug73725\");\n$r = odbc_fetch_array($rc);\nvar_dump($r);\n$r = odbc_fetch_array($rc);\nvar_dump($r);\n?>")).toMatchSnapshot();
  });
});
