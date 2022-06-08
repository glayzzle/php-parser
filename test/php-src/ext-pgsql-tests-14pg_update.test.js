// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/14pg_update.phpt
  it("PostgreSQL pg_update()", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\n$fields = array('num'=>'1234', 'str'=>'ABC', 'bin'=>'XYZ');\n$ids = array('num'=>'1234');\npg_update($db, $table_name, $fields, $ids) or print \"Error in test 1\\n\";\necho pg_update($db, $table_name, $fields, $ids, PGSQL_DML_STRING).\"\\n\";\necho pg_update($db, $table_name, $fields, $ids, PGSQL_DML_STRING|PGSQL_DML_ESCAPE).\"\\n\";\necho \"Ok\\n\";\n?>")).toMatchSnapshot();
  });
});
