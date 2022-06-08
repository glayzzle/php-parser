// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug80592.phpt
  it("Bug #80592 (all floats are the same in ODBC parameters)", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\nodbc_exec($conn,\"CREATE TABLE bug80592 (f1 float not null, f2 float not null, f3 float not null)\"); \n$stmt = odbc_prepare($conn, \"INSERT INTO bug80592 (f1, f2, f3) values (?, ?, ?)\");\nodbc_execute($stmt, [1.0, 2.0, 3.0]);\n$res = odbc_exec($conn, \"SELECT f1, f2, f3 from bug80592\");\nvar_dump(odbc_fetch_array($res));\n?>")).toMatchSnapshot();
  });
});
