// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug72028.phpt
  it("Bug #72028 pg_query_params(): NULL converts to empty string", function () {
    expect(parser.parseCode("<?php\n// create test table\ninclude('config.inc');\n$conn = pg_connect($conn_str);\n$table = \"bug72028_\" . md5(uniqid(time()));\npg_query($conn, \"CREATE TABLE $table (value TEXT, details TEXT);\");\n$sql = \"INSERT INTO $table (value, details) VALUES ($1, $2)\";\n$params = array(null, \"insert before looping with a reference\");\n$result = pg_query_params($conn, $sql, $params);\n$params2 = array(null, \"insert after looping with a reference\");\nforeach ($params2 as &$p) {\n    // doing nothing\n}\nunset($p);\n$result = pg_query_params($conn, $sql, $params2);\n$r = pg_query($conn, \"SELECT * FROM $table\");\nwhile (false !== ($i = pg_fetch_assoc($r))) {\n    var_dump($i);\n}\npg_query($conn, \"DROP TABLE $table\");\n?>")).toMatchSnapshot();
  });
});
