// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_41698.phpt
  it("PDO MySQL Bug #41698 (float parameters truncated to integer in prepared statements)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\nsetlocale(LC_ALL, \"de\",\"de_DE\",\"de_DE.ISO8859-1\",\"de_DE.ISO_8859-1\",\"de_DE.UTF-8\");\n$db->exec('CREATE TABLE test(floatval DECIMAL(8,6))');\n$db->exec('INSERT INTO test VALUES(2.34)');\n$value=4.56;\n$stmt = $db->prepare('INSERT INTO test VALUES(?)');\n$stmt->execute(array($value));\nvar_dump($db->query('SELECT * from test')->fetchAll(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
