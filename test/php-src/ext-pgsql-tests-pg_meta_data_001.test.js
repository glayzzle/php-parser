// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/pg_meta_data_001.phpt
  it("PostgreSQL pg_meta_data() - basic test using schema", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$conn = pg_connect($conn_str);\npg_query($conn, 'CREATE SCHEMA phptests');\npg_query($conn, 'CREATE TABLE phptests.foo (id INT, id2 INT)');\npg_query($conn, 'CREATE TABLE foo (id INT, id3 INT)');\nvar_dump(pg_meta_data($conn, 'foo'));\nvar_dump(pg_meta_data($conn, 'phptests.foo'));\nvar_dump(pg_meta_data($conn, 'phptests.foo', TRUE));\npg_query($conn, 'DROP TABLE foo');\npg_query($conn, 'DROP TABLE phptests.foo');\npg_query($conn, 'DROP SCHEMA phptests');\n?>")).toMatchSnapshot();
  });
});
