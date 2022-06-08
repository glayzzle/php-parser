// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug80147.phpt
  it("Bug #80147 (BINARY strings may not be properly zero-terminated)", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\nodbc_exec($conn, \"CREATE TABLE bug80147 (id INT, whatever VARBINARY(50))\");\nodbc_exec($conn, \"INSERT INTO bug80147 VALUES (1, CONVERT(VARBINARY(50), 'whatever'))\");\n$res = odbc_exec($conn, \"SELECT * FROM bug80147\");\nodbc_binmode($res, ODBC_BINMODE_RETURN);\nodbc_fetch_row($res);\nvar_dump(odbc_result($res, 'whatever'));\n?>")).toMatchSnapshot();
  });
});
