// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/06copy_2.phpt
  it("PostgreSQL copy functions, part 2", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$db = pg_connect($conn_str);\npg_query($db, 'CREATE TABLE test_copy (x int)');\npg_query($db, 'COPY test_copy FROM STDIN');\npg_put_line($db, \"1\\n\");\npg_put_line($db, \"\\\\N\\n\");\npg_put_line($db, \"\\\\.\\n\");\npg_end_copy($db);\nvar_dump(pg_fetch_all_columns(pg_query($db, 'SELECT * FROM test_copy ORDER BY 1')));\npg_query($db, 'DROP TABLE test_copy');\n?>")).toMatchSnapshot();
  });
});
