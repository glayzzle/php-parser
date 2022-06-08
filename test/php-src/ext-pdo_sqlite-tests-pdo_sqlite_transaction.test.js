// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_transaction.phpt
  it("PDO_sqlite: Testing transaction", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n$db->beginTransaction();\n$db->query('CREATE TABLE IF NOT EXISTS foobar (id INT AUTO INCREMENT, name TEXT)');\n$db->commit();\n$db->beginTransaction();\n$db->query('INSERT INTO foobar VALUES (NULL, \"PHP\")');\n$db->query('INSERT INTO foobar VALUES (NULL, \"PHP6\")');\n$db->rollback();\n$r = $db->query('SELECT COUNT(*) FROM foobar');\nvar_dump($r->rowCount());\n$db->query('DROP TABLE foobar');\n?>")).toMatchSnapshot();
  });
});
