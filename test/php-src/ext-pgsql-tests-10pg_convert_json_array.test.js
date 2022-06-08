// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/10pg_convert_json_array.phpt
  it("PostgreSQL pg_convert() and JSON/Array", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\n$fields = array(\n    'textary'=>'{\"meeting\", \"lunch\", \"training\", \"presentation\"}',\n    'jsn'=>'{\"f1\":1,\"f2\":\"foo\"}',\n);\n$converted = pg_convert($db, $table_name_92, $fields);\nvar_dump($converted);\nif (!pg_insert($db, $table_name_92, $fields)) {\n    echo \"Error\\n\";\n} else {\n    echo \"OK\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
