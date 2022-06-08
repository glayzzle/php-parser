// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_015.phpt
  it("PDO Common: PDO::FETCH_COLUMN", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE test(id int NOT NULL PRIMARY KEY, val VARCHAR(10), val2 VARCHAR(20))');\n$db->exec('INSERT INTO test VALUES(1, \\'A\\', \\'A2\\')');\n$db->exec('INSERT INTO test VALUES(2, \\'A\\', \\'B2\\')');\n$select1 = $db->prepare('SELECT id, val, val2 FROM test');\n$select2 = $db->prepare('SELECT val, val2 FROM test');\n$select1->execute();\nvar_dump($select1->fetchAll(PDO::FETCH_COLUMN));\n$select1->execute();\nvar_dump($select1->fetchAll(PDO::FETCH_COLUMN, 2));\n$select1->execute();\nvar_dump($select1->fetchAll(PDO::FETCH_COLUMN|PDO::FETCH_GROUP));\n$select1->execute();\nvar_dump($select1->fetchAll(PDO::FETCH_COLUMN|PDO::FETCH_UNIQUE));\n$select1->execute();\nvar_dump($select1->fetchAll(PDO::FETCH_COLUMN|PDO::FETCH_UNIQUE, 0));\n$select1->execute();\nvar_dump($select1->fetchAll(PDO::FETCH_COLUMN|PDO::FETCH_UNIQUE, 1));\n$select1->execute();\nvar_dump($select1->fetchAll(PDO::FETCH_COLUMN|PDO::FETCH_UNIQUE, 2));\n$select2->execute();\nvar_dump($select2->fetchAll(PDO::FETCH_COLUMN|PDO::FETCH_GROUP));\n?>")).toMatchSnapshot();
  });
});
