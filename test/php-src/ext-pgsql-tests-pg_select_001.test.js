// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/pg_select_001.phpt
  it("PostgreSQL pg_select() - basic test using schema", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$conn = pg_connect($conn_str);\npg_query($conn, 'CREATE SCHEMA phptests');\npg_query($conn, 'CREATE TABLE phptests.foo (id INT, id2 INT)');\npg_query($conn, 'INSERT INTO phptests.foo VALUES (1,2)');\npg_query($conn, 'INSERT INTO phptests.foo VALUES (2,3)');\npg_query($conn, 'CREATE TABLE phptests.bar (id4 INT, id3 INT)');\npg_query($conn, 'INSERT INTO phptests.bar VALUES (4,5)');\npg_query($conn, 'INSERT INTO phptests.bar VALUES (6,7)');\n/* Nonexistent table */\nvar_dump(pg_select($conn, 'foo', array('id' => 1)));\n/* Existent column */\nvar_dump(pg_select($conn, 'phptests.foo', array('id' => 1)));\n/* Testing with inexistent column */\nvar_dump(pg_select($conn, 'phptests.bar', array('id' => 1)));\n/* Existent column */\nvar_dump(pg_select($conn, 'phptests.bar', array('id4' => 4)));\n/* Use a different result type */\nvar_dump(pg_select($conn, 'phptests.bar', array('id4' => 4), 0, PGSQL_NUM));\npg_query($conn, 'DROP TABLE phptests.foo');\npg_query($conn, 'DROP TABLE phptests.bar');\npg_query($conn, 'DROP SCHEMA phptests');\n?>")).toMatchSnapshot();
  });
});
