// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/odbc_columns_001.phpt
  it("odbc_columns(): Basic test", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\nvar_dump($result = odbc_columns($conn, '', '', '', ''));\nvar_dump(odbc_fetch_row($result));\nvar_dump($result = odbc_columns($conn));\nvar_dump(odbc_fetch_row($result));\nvar_dump(odbc_free_result($result));\nvar_dump($result = odbc_columns($conn, NULL, NULL, NULL, NULL));\nvar_dump(odbc_fetch_row($result));\nvar_dump(odbc_free_result($result));\nvar_dump($result = odbc_columns($conn, 'FOO', 'FOO', 'FOO', 'FOO'));\nvar_dump(odbc_fetch_row($result));\n?>")).toMatchSnapshot();
  });
});
