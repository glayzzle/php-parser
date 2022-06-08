// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/11pg_meta_data.phpt
  it("PostgreSQL pg_metadata()", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\n$meta = pg_meta_data($db, $table_name);\nvar_dump($meta);\n?>")).toMatchSnapshot();
  });
});
