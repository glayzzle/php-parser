// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/13pg_select.phpt
  it("PostgreSQL pg_select()", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\n$fields = array('num'=>'1234', 'str'=>'ABC', 'bin'=>'XYZ');\n$ids = array('num'=>'1234');\n$res = pg_select($db, $table_name, $ids) or print \"Error\\n\";\nvar_dump($res);\necho pg_select($db, $table_name, $ids, PGSQL_DML_STRING).\"\\n\";\necho \"Ok\\n\";\n?>")).toMatchSnapshot();
  });
});
