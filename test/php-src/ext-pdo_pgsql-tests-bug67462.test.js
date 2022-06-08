// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug67462.phpt
  it("PDO PgSQL Bug #67462 (PDO_PGSQL::beginTransaction() wrongly throws exception when not in transaction)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$pdo = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$pdo->setAttribute (\\PDO::ATTR_ERRMODE, \\PDO::ERRMODE_EXCEPTION);\n$pdo->beginTransaction();\ntry {\n    $pdo->query(\"CREATE TABLE b67462 (a int NOT NULL PRIMARY KEY DEFERRABLE INITIALLY DEFERRED)\");\n    $pdo->query(\"INSERT INTO b67462 VALUES (1), (1)\");\n    var_dump($pdo->inTransaction());\n    $pdo->commit(); // This should fail!\n} catch (\\Exception $e) {\n    var_dump($pdo->inTransaction());\n    var_dump($pdo->beginTransaction());\n}\n?>")).toMatchSnapshot();
  });
});
