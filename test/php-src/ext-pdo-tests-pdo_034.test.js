// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_034.phpt
  it("PDO Common: PDO::FETCH_KEY_PAIR fetch mode test", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec(\"CREATE TABLE test (a varchar(100), b varchar(100), c varchar(100))\");\nfor ($i = 0; $i < 5; $i++) {\n    $db->exec(\"INSERT INTO test (a,b,c) VALUES('test\".$i.\"','\".$i.\"','\".$i.\"')\");\n}\nvar_dump($db->query(\"SELECT a,b FROM test\")->fetch(PDO::FETCH_KEY_PAIR));\nvar_dump($db->query(\"SELECT a,b FROM test\")->fetchAll(PDO::FETCH_KEY_PAIR));\nvar_dump($db->query(\"SELECT * FROM test\")->fetch(PDO::FETCH_KEY_PAIR));\nvar_dump($db->query(\"SELECT a,a FROM test\")->fetchAll(PDO::FETCH_KEY_PAIR));\n?>")).toMatchSnapshot();
  });
});
