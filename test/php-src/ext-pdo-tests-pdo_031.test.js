// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_031.phpt
  it("PDO Common: PDOStatement SPL iterator", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$data = array(\n    array('10', 'Abc', 'zxy'),\n    array('20', 'Def', 'wvu'),\n    array('30', 'Ghi', 'tsr'),\n);\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE test(id INT NOT NULL PRIMARY KEY, val VARCHAR(10), val2 VARCHAR(16))');\n$stmt = $db->prepare(\"INSERT INTO test VALUES(?, ?, ?)\");\nforeach ($data as $row) {\n    $stmt->execute($row);\n}\nunset($stmt);\necho \"===QUERY===\\n\";\n$stmt = $db->query('SELECT * FROM test');\nforeach(new RecursiveTreeIterator(new RecursiveArrayIterator($stmt->fetchAll(PDO::FETCH_ASSOC)), RecursiveTreeIterator::BYPASS_KEY) as $c=>$v)\n{\n    echo \"$v [$c]\\n\";\n}\necho \"===DONE===\\n\";\nexit(0);\n?>")).toMatchSnapshot();
  });
});
