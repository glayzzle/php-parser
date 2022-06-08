// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/17result.phpt
  it("PostgreSQL pg_fetch_*() functions", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\n$sql = \"SELECT * FROM $table_name ORDER BY num\";\n$result = pg_query($db, $sql) or die('Cannot query db');\n$rows = pg_num_rows($result);\nvar_dump(pg_result_seek($result, 1));\nvar_dump(pg_fetch_object($result));\nvar_dump(pg_fetch_array($result, 1));\nvar_dump(pg_fetch_row($result, 1));\nvar_dump(pg_fetch_assoc($result, 1));\nvar_dump(pg_result_seek($result, 0));\necho \"Ok\\n\";\n?>")).toMatchSnapshot();
  });
});
