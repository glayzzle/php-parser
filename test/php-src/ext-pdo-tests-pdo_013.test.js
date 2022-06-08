// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_013.phpt
  it("PDO Common: PDOStatement iterator", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE test(id int NOT NULL PRIMARY KEY, val VARCHAR(10), grp VARCHAR(10))');\n$db->exec('INSERT INTO test VALUES(1, \\'A\\', \\'Group1\\')');\n$db->exec('INSERT INTO test VALUES(2, \\'B\\', \\'Group2\\')');\n$SELECT = 'SELECT val, grp FROM test';\n$stmt = $db->prepare($SELECT);\n$stmt->execute();\n$stmt->setFetchMode(PDO::FETCH_NUM);\nforeach ($stmt as $data)\n{\n    var_dump($data);\n}\nclass Test\n{\n    function __construct($name = 'N/A')\n    {\n        echo __METHOD__ . \"($name)\\n\";\n    }\n}\nunset($stmt);\nforeach ($db->query($SELECT, PDO::FETCH_CLASS, 'Test') as $data)\n{\n    var_dump($data);\n}\nunset($stmt);\n$stmt = $db->query($SELECT, PDO::FETCH_CLASS, 'Test', array('WOW'));\nforeach($stmt as $data)\n{\n    var_dump($data);\n}\n?>")).toMatchSnapshot();
  });
});
