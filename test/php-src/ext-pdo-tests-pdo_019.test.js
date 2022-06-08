// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_019.phpt
  it("PDO Common: fetch() and while()", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE test(idx int NOT NULL PRIMARY KEY, txt VARCHAR(20))');\n$db->exec('INSERT INTO test VALUES(0, \\'String0\\')');\n$db->exec('INSERT INTO test VALUES(1, \\'String1\\')');\n$db->exec('INSERT INTO test VALUES(2, \\'String2\\')');\n$db->exec('INSERT INTO test VALUES(3, \\'String3\\')');\nvar_dump($db->query('SELECT COUNT(*) FROM test')->fetchColumn());\n$stmt = $db->prepare('SELECT idx, txt FROM test ORDER by idx');\n$stmt->execute();\n$cont = $stmt->fetchAll(PDO::FETCH_COLUMN|PDO::FETCH_UNIQUE);\nvar_dump($cont);\necho \"===WHILE===\\n\";\n$stmt->bindColumn('idx', $idx);\n$stmt->bindColumn('txt', $txt);\n$stmt->execute();\nwhile($stmt->fetch(PDO::FETCH_BOUND)) {\n    var_dump(array($idx=>$txt));\n}\n?>")).toMatchSnapshot();
  });
});
