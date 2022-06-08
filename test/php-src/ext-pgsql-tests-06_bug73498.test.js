// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/06_bug73498.phpt
  it("Bug 73498 Incorrect DELIMITER syntax for pg_copy_to()", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$db = pg_connect($conn_str);\n$rows = pg_copy_to($db, \"(select * from {$view_name})\");\nvar_dump(gettype($rows));\nvar_dump(count($rows) > 0);\n?>")).toMatchSnapshot();
  });
});
