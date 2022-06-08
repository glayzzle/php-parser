// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_009.phpt
  it("PDO Common: PDO::FETCH_CLASSTYPE", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE classtypes(id int NOT NULL PRIMARY KEY, name VARCHAR(10) NOT NULL UNIQUE)');\n$db->exec('INSERT INTO classtypes VALUES(0, \\'stdClass\\')');\n$db->exec('INSERT INTO classtypes VALUES(1, \\'Test1\\')');\n$db->exec('INSERT INTO classtypes VALUES(2, \\'Test2\\')');\n$db->exec('CREATE TABLE test(id int NOT NULL PRIMARY KEY, classtype int, val VARCHAR(10))');\n$db->exec('INSERT INTO test VALUES(1, 0, \\'A\\')');\n$db->exec('INSERT INTO test VALUES(2, 1, \\'B\\')');\n$db->exec('INSERT INTO test VALUES(3, 2, \\'C\\')');\n$db->exec('INSERT INTO test VALUES(4, 3, \\'D\\')');\n$stmt = $db->prepare('SELECT classtypes.name, test.id AS id, test.val AS val FROM test LEFT JOIN classtypes ON test.classtype=classtypes.id');\nclass Test1\n{\n    public function __construct()\n    {\n        echo __METHOD__ . \"()\\n\";\n    }\n}\nclass Test2\n{\n    public function __construct()\n    {\n        echo __METHOD__ . \"()\\n\";\n    }\n}\nclass Test3\n{\n    public function __construct()\n    {\n        echo __METHOD__ . \"()\\n\";\n    }\n}\n$stmt->execute();\nvar_dump($stmt->fetchAll(PDO::FETCH_NUM));\n$stmt->execute();\nvar_dump($stmt->fetchAll(PDO::FETCH_CLASS|PDO::FETCH_CLASSTYPE, 'Test3'));\n?>")).toMatchSnapshot();
  });
});
