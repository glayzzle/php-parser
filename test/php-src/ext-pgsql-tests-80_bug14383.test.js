// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/80_bug14383.phpt
  it("Bug #14383 (8.0+) (using postgres with DBA causes DBA not to be able to find any keys)", function () {
    expect(parser.parseCode("<?php\nrequire_once('config.inc');\n$dbh = @pg_connect($conn_str);\nif (!$dbh) {\n    die (\"Could not connect to the server\");\n}\npg_close($dbh);\nrequire_once(__DIR__.'/../../dba/tests/test.inc');\nrequire_once(__DIR__.'/../../dba/tests/dba_handler.inc');\n?>")).toMatchSnapshot();
  });
});
