// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug76548.phpt
  it("Bug #76548 pg_fetch_result did not fetch the next row", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$conn = pg_connect($conn_str);\n$result = pg_query($conn, 'SELECT v FROM (VALUES (1), (2), (3)) AS t(v)');\nwhile ($value = pg_fetch_result($result, 0)) {\n  var_dump($value); // should be 1, 2 then 3.\n}\n?>")).toMatchSnapshot();
  });
});
