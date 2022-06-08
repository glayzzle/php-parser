// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/21pg_get_notify.phpt
  it("PostgreSQL pg_get_notify() functions", function () {
    expect(parser.parseCode("<?php\n// optional functions\ninclude('config.inc');\n$db = pg_connect($conn_str);\npg_query($db, 'LISTEN test_msg');\npg_query($db, 'NOTIFY test_msg');\n$msg = pg_get_notify($db);\nisset($msg['message'],$msg['pid']) ? print 'OK' : print 'NG';\n?>")).toMatchSnapshot();
  });
});
