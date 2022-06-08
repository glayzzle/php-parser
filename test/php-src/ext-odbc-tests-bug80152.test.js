// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug80152.phpt
  it("Bug #80152 (odbc_execute() moves internal pointer of $params)", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\nodbc_exec($conn,\"CREATE TABLE bug80152 (id INT, name CHAR(24))\"); \n$stmt = odbc_prepare($conn,\"INSERT INTO bug80152 (id, name) VALUES (?, ?)\");\n$params = [1, \"John\", \"Lim\"];\nvar_dump(key($params));\nodbc_execute($stmt, $params);\nvar_dump(key($params));\n?>")).toMatchSnapshot();
  });
});
