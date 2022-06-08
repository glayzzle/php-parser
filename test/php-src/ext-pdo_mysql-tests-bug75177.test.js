// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug75177.phpt
  it("PDO MySQL Bug #75177 Type 'bit' is fetched as unexpected string", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$pdo = MySQLPDOTest::factory();\n$tbl = \"test\";\n$pdo->query(\"DROP TABLE IF EXISTS $tbl\");\n$pdo->query(\"CREATE TABLE $tbl (`bit` bit(8)) ENGINE=InnoDB\");\n$pdo->query(\"INSERT INTO $tbl (`bit`) VALUES (1)\");\n$pdo->query(\"INSERT INTO $tbl (`bit`) VALUES (0b011)\");\n$pdo->query(\"INSERT INTO $tbl (`bit`) VALUES (0b01100)\");\n$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\n$ret = $pdo->query(\"SELECT * FROM $tbl\")->fetchAll();\nforeach ($ret as $i) {\n    var_dump($i[\"bit\"]);\n}\n$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\n$ret = $pdo->query(\"SELECT * FROM $tbl\")->fetchAll();\nforeach ($ret as $i) {\n    var_dump($i[\"bit\"]);\n}\n?>")).toMatchSnapshot();
  });
});
