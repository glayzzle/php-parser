// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_createcollation.phpt
  it("PDO_sqlite: Testing sqliteCreateCollation()", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->query('CREATE TABLE IF NOT EXISTS foobar (id INT AUTO INCREMENT, name TEXT)');\n$db->query('INSERT INTO foobar VALUES (NULL, \"1\")');\n$db->query('INSERT INTO foobar VALUES (NULL, \"2\")');\n$db->query('INSERT INTO foobar VALUES (NULL, \"10\")');\n$db->sqliteCreateCollation('MYCOLLATE', function($a, $b) { return strnatcmp($a, $b); });\n$result = $db->query('SELECT name FROM foobar ORDER BY name COLLATE MYCOLLATE');\nforeach ($result as $row) {\n    echo $row['name'] . \"\\n\";\n}\n$result = $db->query('SELECT name FROM foobar ORDER BY name');\nforeach ($result as $row) {\n  echo $row['name'] . \"\\n\";\n}\n$db->query('DROP TABLE foobar');\n?>")).toMatchSnapshot();
  });
});
