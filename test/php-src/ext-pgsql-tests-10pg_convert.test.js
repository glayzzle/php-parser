// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/10pg_convert.phpt
  it("PostgreSQL pg_convert()", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\n$fields = array('num'=>'1234', 'str'=>'AAA', 'bin'=>'BBB');\n$converted = pg_convert($db, $table_name, $fields);\nvar_dump($converted);\n?>")).toMatchSnapshot();
  });
});
