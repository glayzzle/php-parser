// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_021.phpt
  it("PDO Common: PDOStatement::execute with parameters", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\nif ($db->getAttribute(PDO::ATTR_DRIVER_NAME) == 'mysql') {\n    $db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);\n}\n$db->exec('CREATE TABLE test(id INT NOT NULL PRIMARY KEY, val VARCHAR(10), val2 VARCHAR(16))');\n$select = $db->prepare('SELECT COUNT(id) FROM test');\n$data = array(\n    array('10', 'Abc', 'zxy'),\n    array('20', 'Def', 'wvu'),\n    array('30', 'Ghi', 'tsr'),\n    array('40', 'Jkl', 'qpo'),\n    array('50', 'Mno', 'nml'),\n    array('60', 'Pqr', 'kji'),\n);\n// Insert using question mark placeholders\n$stmt = $db->prepare(\"INSERT INTO test VALUES(?, ?, ?)\");\nforeach ($data as $row) {\n    $stmt->execute($row);\n}\n$select->execute();\n$num = $select->fetchColumn();\necho 'There are ' . $num . \" rows in the table.\\n\";\n// Insert using named parameters\n$stmt2 = $db->prepare(\"INSERT INTO test VALUES(:first, :second, :third)\");\nforeach ($data as $row) {\n    $stmt2->execute(array(':first'=>($row[0] + 5), ':second'=>$row[1],\n        ':third'=>$row[2]));\n}\n$select->execute();\n$num = $select->fetchColumn();\necho 'There are ' . $num . \" rows in the table.\\n\";\n?>")).toMatchSnapshot();
  });
});
