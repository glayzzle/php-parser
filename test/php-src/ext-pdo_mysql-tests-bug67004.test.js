// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug67004.phpt
  it("Bug #67004: Executing PDOStatement::fetch() more than once prevents releasing resultset", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$dbh = MySQLPDOTest::factory();\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\n$dbh->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$stmt = $dbh->prepare(\"SELECT ?\");\n$stmt->execute([\"foo\"]);\nvar_dump($stmt->fetchColumn(0));\n$stmt->execute([\"bar\"]);\nvar_dump($stmt->fetchColumn(0));\n$stmt = $dbh->prepare(\"SELECT ?\");\n$stmt->execute([\"baz\"]);\nvar_dump($stmt->fetchColumn(0));\n?>")).toMatchSnapshot();
  });
});
