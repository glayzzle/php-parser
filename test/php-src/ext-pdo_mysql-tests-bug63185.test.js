// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug63185.phpt
  it("Bug #63185: nextRowset() ignores MySQL errors with native prepared statements", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$pdo = MySQLPDOTest::factory();\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$pdo->exec('DROP PROCEDURE IF EXISTS test_procedure_error_at_second');\n$pdo->exec('CREATE PROCEDURE test_procedure_error_at_second ()\n\tBEGIN\n\t\tSELECT \"x\" as foo;\n\t\tSELECT * FROM no_such_table;\n\tEND');\n$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\n$st = $pdo->query('CALL test_procedure_error_at_second()');\nvar_dump($st->fetchAll());\ntry {\n    var_dump($st->nextRowset());\n} catch (PDOException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nunset($st);\n$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\n$st = $pdo->query('CALL test_procedure_error_at_second()');\nvar_dump($st->fetchAll());\ntry {\n    var_dump($st->nextRowset());\n} catch (PDOException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($st->fetchAll());\n?>")).toMatchSnapshot();
  });
});
