// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/20pg_get_pid.phpt
  it("PostgreSQL pg_get_pid() functions", function () {
    expect(parser.parseCode("<?php\n// optional functions\ninclude('config.inc');\n$db = pg_connect($conn_str);\n$pid = pg_get_pid($db);\nis_integer($pid) ? print 'OK' : print 'NG';\n?>")).toMatchSnapshot();
  });
});
