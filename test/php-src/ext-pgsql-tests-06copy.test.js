// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/06copy.phpt
  it("PostgreSQL copy functions", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$db = pg_connect($conn_str);\n$rows = pg_copy_to($db, $table_name);\npg_query($db, \"DELETE FROM $table_name\");\npg_copy_from($db, $table_name, $rows);\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
