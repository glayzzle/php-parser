// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug47199.phpt
  it("Bug #47199 (pg_delete fails on NULL)", function () {
    expect(parser.parseCode("<?php\nrequire_once('config.inc');\n$dbh = pg_connect($conn_str);\n$tbl_name = 'test_47199';\n@pg_query($dbh, \"DROP TABLE $tbl_name\");\npg_query($dbh, \"CREATE TABLE $tbl_name (null_field INT, not_null_field INT NOT NULL)\");\npg_insert($dbh, $tbl_name, array('null_field' => null, 'not_null_field' => 1));\npg_insert($dbh, $tbl_name, array('null_field' => null, 'not_null_field' => 2));\nvar_dump(pg_fetch_all(pg_query($dbh, 'SELECT * FROM '. $tbl_name)));\n$query = pg_delete($dbh, $tbl_name, array('null_field' => NULL,'not_null_field' => 2), PGSQL_DML_STRING|PGSQL_DML_EXEC);\necho $query, \"\\n\";\n$query = pg_update($dbh, $tbl_name, array('null_field' => NULL, 'not_null_field' => 0), array('not_null_field' => 1, 'null_field' => ''), PGSQL_DML_STRING|PGSQL_DML_EXEC);\necho $query, \"\\n\";\nvar_dump(pg_fetch_all(pg_query($dbh, 'SELECT * FROM '. $tbl_name)));\n@pg_query($dbh, \"DROP TABLE $tbl_name\");\npg_close($dbh);\necho PHP_EOL.\"Done\".PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
