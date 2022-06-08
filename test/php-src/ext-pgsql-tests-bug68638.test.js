// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug68638.phpt
  it("Bug #68638 pg_update() fails to store infinite values", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$conn = pg_connect($conn_str);\n$table='test_68638';\npg_query($conn, \"CREATE TABLE $table (id INT, value FLOAT)\");\npg_insert($conn,$table, array('id' => 1, 'value' => 1.2));\npg_insert($conn,$table, array('id' => 2, 'value' => 10));\npg_insert($conn,$table, array('id' => 3, 'value' => 15));\nvar_dump(pg_update($conn,$table, array('value' => 'inf'), array('id' => 1), PGSQL_DML_STRING));\npg_update($conn,$table, array('value' => 'inf'), array('id' => 1));\npg_update($conn,$table, array('value' => '-inf'), array('id' => 2));\npg_update($conn,$table, array('value' => '+inf'), array('id' => 3));\n$rs = pg_query($conn, \"SELECT * FROM $table\");\nwhile ($row = pg_fetch_assoc($rs)) {\n        var_dump($row);\n}\npg_query($conn, \"DROP TABLE $table\");\n?>")).toMatchSnapshot();
  });
});
