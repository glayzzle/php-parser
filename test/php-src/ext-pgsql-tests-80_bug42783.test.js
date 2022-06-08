// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/80_bug42783.phpt
  it("Bug #42783 (pg_insert() does not support an empty value array)", function () {
    expect(parser.parseCode("<?php\nrequire_once('config.inc');\n$dbh = @pg_connect($conn_str);\nif (!$dbh) {\n    die (\"Could not connect to the server\");\n}\npg_query($dbh, \"CREATE TABLE php_test (id SERIAL PRIMARY KEY, time TIMESTAMP NOT NULL DEFAULT now())\");\npg_insert($dbh, 'php_test', array());\nvar_dump(pg_fetch_assoc(pg_query($dbh, \"SELECT * FROM php_test\")));\npg_query($dbh, \"DROP TABLE php_test\");\npg_close($dbh);\n?>")).toMatchSnapshot();
  });
});
