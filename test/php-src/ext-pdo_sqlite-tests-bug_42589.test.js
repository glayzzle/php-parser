// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug_42589.phpt
  it("PDO SQLite Feature Request #42589 (getColumnMeta() should also return table name)", function () {
    expect(parser.parseCode("<?php\n$db = new PDO(\"sqlite::memory:\");\n$db->exec('CREATE TABLE test (field1 VARCHAR(10))');\n$db->exec('INSERT INTO test VALUES(\"test\")');\n$result = $db->query('SELECT * FROM test t1 LEFT JOIN test t2 ON t1.field1 = t2.field1');\n$meta1 = $result->getColumnMeta(0);\n$meta2 = $result->getColumnMeta(1);\nvar_dump(!empty($meta1['table']) && $meta1['table'] == 'test');\nvar_dump(!empty($meta2['table']) && $meta2['table'] == 'test');\n?>")).toMatchSnapshot();
  });
});
