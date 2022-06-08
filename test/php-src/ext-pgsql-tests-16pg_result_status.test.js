// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/16pg_result_status.phpt
  it("PostgreSQL pg_result_status()", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$db = pg_connect($conn_str);\n$sql = \"SELECT * FROM \".$table_name.\" WHERE num = -2\";\n$result = pg_query($db, \"BEGIN;END\");\necho pg_result_status($result).\"\\n\";\necho pg_result_status($result, PGSQL_STATUS_STRING).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
