// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug77289.phpt
  it("Bug #77289: PDO MySQL segfaults with persistent connection", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$dsn = MySQLPDOTest::getDSN();\n$user = PDO_MYSQL_TEST_USER;\n$pass = PDO_MYSQL_TEST_PASS;\n$pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_PERSISTENT => true]);\n$pdo->exec(\"DROP TABLE IF EXISTS bug77289\");\n$pdo->exec(\"CREATE TEMPORARY TABLE bug77289 (x INT)\");\n$pdo->exec(\"UPDATE bug77289 SET x = x\");\n?>\n===DONE===")).toMatchSnapshot();
  });
});
