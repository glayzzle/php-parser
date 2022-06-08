// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/connection_reuse.phpt
  it("Reusing connection with same connection string", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$db1 = pg_connect($conn_str);\n$db2 = pg_connect($conn_str);\nvar_dump($db1, $db2);\n?>")).toMatchSnapshot();
  });
});
