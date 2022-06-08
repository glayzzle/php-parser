// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug79596.phpt
  it("Bug #79596 (MySQL FLOAT truncates to int some locales)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\nsetlocale(LC_ALL, 'de_DE', 'de-DE');\n$pdo = MySQLPDOTest::factory();\n$pdo->setAttribute(\\PDO::ATTR_EMULATE_PREPARES, false);\n$pdo->query('CREATE TABLE bug79596 (broken FLOAT(2,1))');\n$pdo->query('INSERT INTO bug79596 VALUES(4.9)');\nvar_dump($pdo->query('SELECT broken FROM bug79596')->fetchColumn(0));\n?>")).toMatchSnapshot();
  });
});
