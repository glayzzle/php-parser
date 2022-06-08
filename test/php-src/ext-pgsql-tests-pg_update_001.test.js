// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/pg_update_001.phpt
  it("PostgreSQL pg_update() - basic test using schema", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$conn = pg_connect($conn_str);\npg_query($conn, 'CREATE SCHEMA phptests');\npg_query($conn, 'CREATE TABLE foo (id INT, id2 INT)');\npg_query($conn, 'CREATE TABLE phptests.foo (id INT, id2 INT)');\npg_insert($conn, 'foo', array('id' => 1, 'id2' => 1));\npg_insert($conn, 'phptests.foo', array('id' => 1, 'id2' => 2));\npg_update($conn, 'foo', array('id' => 10), array('id' => 1));\nvar_dump(pg_update($conn, 'foo', array('id' => 10), array('id' => 1), PGSQL_DML_STRING));\npg_update($conn, 'phptests.foo', array('id' => 100), array('id2' => 2));\nvar_dump(pg_update($conn, 'phptests.foo', array('id' => 100), array('id2' => 2), PGSQL_DML_STRING));\n$rs = pg_query($conn, 'SELECT * FROM foo UNION SELECT * FROM phptests.foo ORDER BY id');\nwhile ($row = pg_fetch_assoc($rs)) {\n    var_dump($row);\n}\npg_query($conn, 'DROP TABLE foo');\npg_query($conn, 'DROP TABLE phptests.foo');\npg_query($conn, 'DROP SCHEMA phptests');\n?>")).toMatchSnapshot();
  });
});
