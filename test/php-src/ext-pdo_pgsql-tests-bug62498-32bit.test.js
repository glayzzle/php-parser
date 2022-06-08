// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug62498-32bit.phpt
  it("PDO PgSQL Bug #62498 (pdo_pgsql inefficient when getColumnMeta() is used), 32-bit", function () {
    expect(parser.parseCode("<?php\necho \"Begin test...\\n\";\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute (\\PDO::ATTR_ERRMODE, \\PDO::ERRMODE_EXCEPTION);\n// create the table\n$db->exec(\"CREATE TEMPORARY TABLE bugtest_62498 (int2col INT2, int4col INT4, int8col INT8, stringcol VARCHAR(255), boolcol BOOLEAN, datecol DATE, textcol TEXT, tscol TIMESTAMP, byteacol BYTEA)\");\n// insert some data\n$statement = $db->prepare(\"INSERT INTO bugtest_62498 (int2col, int4col, int8col, stringcol, boolcol, datecol, textcol, tscol, byteacol) VALUES (:int2val, :int4val, :int8val, :stringval, :boolval, :dateval, :textval, :tsval, :byteaval)\");\n$vals = array(\n    \"int2val\" => \"42\",\n    \"int4val\" => \"42\",\n    \"int8val\" => \"42\",\n    \"stringval\" => \"The Answer\",\n    \"boolval\" => true,\n    \"dateval\" => '2015-12-14',\n    \"textval\" => \"some text\",\n    \"tsval\"   => 19990108,\n    \"byteaval\" => 0,\n);\n$statement->execute($vals);\n$select = $db->query('SELECT int2col, int4col, int8col, stringcol, boolcol, datecol, textcol, tscol, byteacol FROM bugtest_62498');\n$meta = [];\nfor ($i=0; $i < count($vals); $i++) {\n  $meta[] = $select->getColumnMeta($i);\n}\nvar_dump($meta);\n?>\nDone")).toMatchSnapshot();
  });
});
