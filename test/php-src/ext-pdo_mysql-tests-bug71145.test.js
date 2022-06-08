// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug71145.phpt
  it("Bug #71145: Multiple statements in init command triggers unbuffered query error", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$attr = array(\n    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci; SET SESSION sql_mode=traditional',\n    PDO::ATTR_STRINGIFY_FETCHES => true,\n);\nputenv('PDOTEST_ATTR=' . serialize($attr));\n$pdo = MySQLPDOTest::factory();\nvar_dump($pdo->query('SELECT 42')->fetchColumn(0));\n?>")).toMatchSnapshot();
  });
});
