// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/15pg_delete.phpt
  it("PostgreSQL pg_delete()", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\n$fields = array('num'=>'1234', 'str'=>'XXX', 'bin'=>'YYY');\n$ids = array('num'=>'1234');\necho pg_delete($db, $table_name, $ids, PGSQL_DML_STRING).\"\\n\";\necho pg_delete($db, $table_name, $ids, PGSQL_DML_STRING|PGSQL_DML_ESCAPE).\"\\n\";\nif (!pg_delete($db, $table_name, $ids)) {\n    echo \"Error\\n\";\n}\nelse {\n    echo \"Ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
