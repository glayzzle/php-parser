// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/19pg_ping.phpt
  it("PostgreSQL pg_ping() functions", function () {
    expect(parser.parseCode("<?php\n// optional functions\ninclude('config.inc');\n$db = pg_connect($conn_str);\nvar_dump(pg_ping($db));\n?>")).toMatchSnapshot();
  });
});
