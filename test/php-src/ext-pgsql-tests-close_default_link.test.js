// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/close_default_link.phpt
  it("pg_close() default link after connection variable has been dropped", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n/* Run me under valgrind */\n$db1 = pg_connect($conn_str);\nunset($db1);\nvar_dump(pg_close());\n?>")).toMatchSnapshot();
  });
});
