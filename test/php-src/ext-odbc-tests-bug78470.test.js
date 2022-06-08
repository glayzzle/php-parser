// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug78470.phpt
  it("Bug #78470 (odbc_specialcolumns() no longer accepts $nullable)", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\nvar_dump(odbc_specialcolumns($conn, SQL_BEST_ROWID, '', '', '', SQL_SCOPE_CURROW, SQL_NO_NULLS));\n?>")).toMatchSnapshot();
  });
});
