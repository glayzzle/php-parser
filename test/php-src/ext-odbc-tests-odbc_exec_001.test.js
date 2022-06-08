// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/odbc_exec_001.phpt
  it("odbc_exec(): Basic test", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\nodbc_exec($conn, 'foo', 'bar');\nodbc_exec($conn, 'foo');\nodbc_exec($conn, '', '');\nodbc_exec($conn, '');\nodbc_exec($conn, 1, 1);\nodbc_exec($conn, 1);\nodbc_exec($conn, NULL, NULL);\nodbc_exec($conn, NULL);\n?>")).toMatchSnapshot();
  });
});
