// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_022.phpt
  it("PDO Common: PDOStatement::getColumnMeta", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE test(id INT NOT NULL PRIMARY KEY, val VARCHAR(10), val2 VARCHAR(16))');\n$data = array(\n    array('10', 'Abc', 'zxy'),\n    array('20', 'Def', 'wvu'),\n    array('30', 'Ghi', 'tsr'),\n    array('40', 'Jkl', 'qpo'),\n    array('50', 'Mno', 'nml'),\n    array('60', 'Pqr', 'kji'),\n);\n// Insert using question mark placeholders\n$stmt = $db->prepare(\"INSERT INTO test VALUES(?, ?, ?)\");\nforeach ($data as $row) {\n    $stmt->execute($row);\n}\n// Retrieve column metadata for a result set returned by explicit SELECT\n$select = $db->query('SELECT id, val, val2 FROM test');\n$meta = $select->getColumnMeta(0);\nvar_dump($meta);\n$meta = $select->getColumnMeta(1);\nvar_dump($meta);\n$meta = $select->getColumnMeta(2);\nvar_dump($meta);\n// Retrieve column metadata for a result set returned by a function\n$select = $db->query('SELECT COUNT(*) FROM test');\n$meta = $select->getColumnMeta(0);\nvar_dump($meta);\n?>")).toMatchSnapshot();
  });
});
