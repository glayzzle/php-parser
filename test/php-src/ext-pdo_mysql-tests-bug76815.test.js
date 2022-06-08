// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug76815.phpt
  it("Bug #76815: PDOStatement cannot be GCed/closeCursor-ed when a PROCEDURE resultset SIGNAL", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$pdo = MySQLPDOTest::factory();\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$pdo->query('DROP FUNCTION IF EXISTS tst');\n$pdo->query('DROP PROCEDURE IF EXISTS tst2');\n$pdo->query('CREATE FUNCTION tst() RETURNS VARCHAR(5) DETERMINISTIC BEGIN RETURN \\'x12345\\'; END');\n$pdo->query('CREATE PROCEDURE tst2() BEGIN SELECT tst(); END');\n$st = $pdo->prepare('CALL tst2()');\ntry {\n    $st->execute();\n} catch (PDOException $ex) {\n    echo $ex->getMessage(), \"\\n\";\n}\nunset($st);\necho \"Ok.\\n\";\n?>")).toMatchSnapshot();
  });
});
