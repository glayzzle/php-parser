// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/12pg_insert.phpt
  it("PostgreSQL pg_insert()", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\n$fields = array('num'=>'1234', 'str'=>'AAA', 'bin'=>'BBB');\npg_insert($db, $table_name, $fields) or print \"Error in test 1\\n\";\necho pg_insert($db, $table_name, $fields, PGSQL_DML_STRING).\"\\n\";\necho \"Ok\\n\";\n?>")).toMatchSnapshot();
  });
});
