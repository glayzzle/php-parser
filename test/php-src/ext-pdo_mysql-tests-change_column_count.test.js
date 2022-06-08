// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/change_column_count.phpt
  it("Change column count after statement has been prepared", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\n$db->exec('DROP TABLE IF EXISTS test');\n$db->exec('CREATE TABLE test (id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(255) NOT NULL)');\n$stmt = $db->prepare('INSERT INTO test (id, name) VALUES(:id, :name)');\n$stmt->execute([\n    'id'   => 10,\n    'name' => 'test',\n]);\n$stmt = $db->prepare('SELECT * FROM test WHERE id = :id');\n$stmt->execute(['id' => 10]);\nvar_dump($stmt->fetchAll(\\PDO::FETCH_ASSOC));\n$db->exec('ALTER TABLE test ADD new_col VARCHAR(255)');\n$stmt->execute(['id' => 10]);\nvar_dump($stmt->fetchAll(\\PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
