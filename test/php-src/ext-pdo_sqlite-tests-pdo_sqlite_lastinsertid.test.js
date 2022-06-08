// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_lastinsertid.phpt
  it("PDO_sqlite: Testing lastInsertId()", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$db->query('CREATE TABLE IF NOT EXISTS foo (id INT AUTO INCREMENT, name TEXT)');\n$db->query('INSERT INTO foo VALUES (NULL, \"PHP\")');\n$db->query('INSERT INTO foo VALUES (NULL, \"PHP6\")');\nvar_dump($db->query('SELECT * FROM foo'));\nvar_dump($db->errorInfo());\nvar_dump($db->lastInsertId());\n$db->query('DROP TABLE foo');\n?>")).toMatchSnapshot();
  });
});
