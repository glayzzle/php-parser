// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_33689.phpt
  it("PDO MySQL Bug #33689 (query() execute() and fetch() return false on valid select queries)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->exec('CREATE TABLE test (bar INT NOT NULL)');\n$db->exec('INSERT INTO test VALUES(1)');\nvar_dump($db->query('SELECT * from test'));\nforeach ($db->query('SELECT * from test') as $row) {\n    print_r($row);\n}\n$stmt = $db->prepare('SELECT * from test');\nprint_r($stmt->getColumnMeta(0));\n$stmt->execute();\n$tmp = $stmt->getColumnMeta(0);\n// libmysql and mysqlnd will show the pdo_type entry at a different position in the hash\n// and will report a different type, as mysqlnd returns native types.\nif (!isset($tmp['pdo_type']) || ($tmp['pdo_type'] != 1 && $tmp['pdo_type'] != 2))\n    printf(\"Expecting pdo_type = 1 got %s\\n\", $tmp['pdo_type']);\nelse\n    unset($tmp['pdo_type']);\nprint_r($tmp);\n?>")).toMatchSnapshot();
  });
});
