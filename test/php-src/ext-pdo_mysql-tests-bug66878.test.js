// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug66878.phpt
  it("Bug #66878: Multiple rowsets not returned unless PDO statement object is unset()", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$pdo = MySQLPDOTest::factory();\n$sql = 'SELECT 123; SELECT 42; SELECT 999';\n$stmt = $pdo->query($sql);\nvar_dump($stmt->nextRowset());\nvar_dump($stmt->nextRowset());\nvar_dump($stmt->nextRowset());\n$stmt->closeCursor();\n$stmt = $pdo->query($sql);\nvar_dump($stmt->nextRowset());\nvar_dump($stmt->nextRowset());\nvar_dump($stmt->nextRowset());\n$stmt->closeCursor();\n?>")).toMatchSnapshot();
  });
});
