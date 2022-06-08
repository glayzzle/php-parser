// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug80808.phpt
  it("Bug #80808: PDO returns ZEROFILL integers without leading zeros", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$pdo = MySQLPDOTest::factory();\n$pdo->exec('DROP TABLE IF EXISTS test');\n$pdo->exec('CREATE TABLE test (postcode INT(4) UNSIGNED ZEROFILL)');\n$pdo->exec('INSERT INTO test (postcode) VALUES (\\'0800\\')');\n$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\nvar_dump($pdo->query('SELECT * FROM test')->fetchColumn(0));\n$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\nvar_dump($pdo->query('SELECT * FROM test')->fetchColumn(0));\n?>")).toMatchSnapshot();
  });
});
