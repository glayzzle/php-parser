// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug78192.phpt
  it("PDO SQLite Bug #78192 SegFault when reuse statement after schema change", function () {
    expect(parser.parseCode("<?php\n$connection = new \\PDO('sqlite::memory:');\n$connection->setAttribute(\\PDO::ATTR_ERRMODE, \\PDO::ERRMODE_EXCEPTION);\n$connection->query('CREATE TABLE user (id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(255) NOT NULL)');\n$stmt = $connection->prepare('INSERT INTO user (id, name) VALUES(:id, :name)');\n$stmt->execute([\n    'id'   => 10,\n    'name' => 'test',\n]);\n$stmt = $connection->prepare('SELECT * FROM user WHERE id = :id');\n$stmt->execute(['id' => 10]);\nvar_dump($stmt->fetchAll(\\PDO::FETCH_ASSOC));\n$connection->query('ALTER TABLE user ADD new_col VARCHAR(255)');\n$stmt->execute(['id' => 10]);\nvar_dump($stmt->fetchAll(\\PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
