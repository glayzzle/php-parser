// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/80_bug39971.phpt
  it("Bug #39971 (8.0+) (pg_insert/pg_update do not allow now() to be used for timestamp fields)", function () {
    expect(parser.parseCode("<?php\nrequire_once('config.inc');\n$dbh = @pg_connect($conn_str);\nif (!$dbh) {\n    die (\"Could not connect to the server\");\n}\npg_query($dbh, \"CREATE TABLE php_test (id SERIAL, tm timestamp NOT NULL)\");\n$values = array('tm' => 'now()');\npg_insert($dbh, 'php_test', $values);\n$ids = array('id' => 1);\npg_update($dbh, 'php_test', $values, $ids);\npg_query($dbh, \"DROP TABLE php_test\");\npg_close($dbh);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
