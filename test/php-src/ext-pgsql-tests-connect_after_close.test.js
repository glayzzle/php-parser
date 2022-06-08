// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/connect_after_close.phpt
  it("Reopen connection after it was closed", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n/* Run me under valgrind */\n$db1 = pg_connect($conn_str);\nunset($db1);\nvar_dump(pg_close());\n$db2 = pg_connect($conn_str);\nunset($db2);\nvar_dump(pg_close());\n?>")).toMatchSnapshot();
  });
});
