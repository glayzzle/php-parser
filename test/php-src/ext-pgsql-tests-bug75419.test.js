// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug75419.phpt
  it("Bug #75419 Default link leaked via pg_close()", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$db1 = pg_connect($conn_str, PGSQL_CONNECT_FORCE_NEW);\n$db2 = pg_connect($conn_str, PGSQL_CONNECT_FORCE_NEW);\npg_close($db1);\nvar_dump(pg_ping());\n?>")).toMatchSnapshot();
  });
});
