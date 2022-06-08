// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_createfunction.phpt
  it("PDO_sqlite: Testing sqliteCreateFunction()", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$db->query('CREATE TABLE IF NOT EXISTS foobar (id INT AUTO INCREMENT, name TEXT)');\n$db->query('INSERT INTO foobar VALUES (NULL, \"PHP\")');\n$db->query('INSERT INTO foobar VALUES (NULL, \"PHP6\")');\n$db->sqliteCreateFunction('testing', function($v) { return strtolower($v); });\nforeach ($db->query('SELECT testing(name) FROM foobar') as $row) {\n    var_dump($row);\n}\n$db->query('DROP TABLE foobar');\n?>")).toMatchSnapshot();
  });
});
