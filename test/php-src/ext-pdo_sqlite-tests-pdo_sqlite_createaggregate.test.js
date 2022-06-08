// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_createaggregate.phpt
  it("PDO_sqlite: Testing sqliteCreateAggregate()", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$db->query('CREATE TABLE IF NOT EXISTS foobar (id INT AUTO INCREMENT, name TEXT)');\n$db->query('INSERT INTO foobar VALUES (NULL, \"PHP\")');\n$db->query('INSERT INTO foobar VALUES (NULL, \"PHP6\")');\n$db->sqliteCreateAggregate('testing', function(&$a, $b) { $a .= $b; return $a; }, function(&$v) { return $v; });\nforeach ($db->query('SELECT testing(name) FROM foobar') as $row) {\n    var_dump($row);\n}\n$db->query('DROP TABLE foobar');\n?>")).toMatchSnapshot();
  });
});
