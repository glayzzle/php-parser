// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/unsigned_bigint.phpt
  it("Bug GH-7837 (large bigints may be truncated)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$pdo = MySQLPDOTest::factory();\n$tbl = \"test\";\n$pdo->query(\"DROP TABLE IF EXISTS $tbl\");\n$pdo->query(\"CREATE TABLE $tbl (`ubigint` bigint unsigned NOT NULL) ENGINE=InnoDB\");\n$pdo->query(\"INSERT INTO $tbl (`ubigint`) VALUES (18446744073709551615)\");\n$pdo->query(\"INSERT INTO $tbl (`ubigint`) VALUES (9223372036854775808)\");\n$pdo->query(\"INSERT INTO $tbl (`ubigint`) VALUES (1)\");\n$result = $pdo->query(\"SELECT ubigint FROM $tbl\")->fetchAll(PDO::FETCH_ASSOC);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
