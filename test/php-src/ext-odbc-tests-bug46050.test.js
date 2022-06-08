// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug46050.phpt
  it("Bug #46050 (odbc_next_result corrupts prepared resource)", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . \"/config.inc\";\n$conn = odbc_connect($dsn, $user, $pass);\n$stmt = odbc_prepare($conn, \"SELECT 1\");\nvar_dump(odbc_execute($stmt));\nvar_dump(odbc_fetch_array($stmt));\nvar_dump(odbc_next_result($stmt));\nvar_dump(odbc_execute($stmt));\nvar_dump(odbc_fetch_array($stmt));\n?>")).toMatchSnapshot();
  });
});
