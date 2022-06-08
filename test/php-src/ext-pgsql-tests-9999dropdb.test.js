// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/9999dropdb.phpt
  it("PostgreSQL drop db", function () {
    expect(parser.parseCode("<?php\n// drop test table\ninclude('config.inc');\n$db = pg_connect($conn_str);\npg_query($db, \"DROP VIEW {$view_name}\");\npg_query($db, \"DROP TABLE \".$table_name);\n@pg_query($db, \"DROP TABLE \".$table_name_92);\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
