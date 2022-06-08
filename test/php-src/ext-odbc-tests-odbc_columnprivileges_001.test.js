// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/odbc_columnprivileges_001.phpt
  it("odbc_columnprivileges(): Basic test", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\nvar_dump($result = odbc_columnprivileges($conn, '', '', '', ''));\nvar_dump(odbc_fetch_row($result));\nvar_dump($result = odbc_columnprivileges($conn, NULL, NULL, NULL, NULL));\nvar_dump(odbc_fetch_row($result));\nvar_dump($result = odbc_columnprivileges($conn, 'FOO', 'FOO', 'FOO', 'FOO'));\nvar_dump(odbc_fetch_row($result));\n?>")).toMatchSnapshot();
  });
});
