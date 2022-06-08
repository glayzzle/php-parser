// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/pg_insert_001.phpt
  it("PostgreSQL pg_select() - basic test using schema", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$conn = pg_connect($conn_str);\npg_query($conn, 'CREATE SCHEMA phptests');\npg_query($conn, 'CREATE TABLE phptests.foo (id INT, id2 INT)');\npg_insert($conn, 'foo', array('id' => 1, 'id2' => 1));\npg_insert($conn, 'phptests.foo', array('id' => 1, 'id2' => 2));\nvar_dump(pg_insert($conn, 'phptests.foo', array('id' => 1, 'id2' => 2), PGSQL_DML_STRING));\nvar_dump(pg_select($conn, 'phptests.foo', array('id' => 1)));\npg_query($conn, 'DROP TABLE phptests.foo');\npg_query($conn, 'DROP SCHEMA phptests');\n?>")).toMatchSnapshot();
  });
});
