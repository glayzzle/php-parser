// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/is_in_transaction.phpt
  it("PDO PgSQL isInTransaction", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);\n$db->exec('CREATE TABLE test (a integer not null primary key, b text)');\n$db->beginTransaction();\ntry {\necho \"Test PDO::PGSQL_TRANSACTION_INTRANS\\n\";\nvar_dump($db->inTransaction());\n$stmt = $db->prepare(\"INSERT INTO test (a, b) values (?, ?)\");\n$stmt->bindValue(1, 1);\n$stmt->bindValue(2, \"test insert\");\n$stmt->execute();\n$db->commit();\necho \"Test PDO::PGSQL_TRANSACTION_IDLE\\n\";\nvar_dump($db->inTransaction());\n$db->beginTransaction();\ntry {\n$stmt = $db->prepare(\"INSERT INTO test (a, b) values (?, ?)\");\n$stmt->bindValue(1, \"error\");\n$stmt->bindValue(2, \"test insert\");\n$stmt->execute();\n} catch (Exception $e) {\n    /* We catch the exception because the execute will give error and we must test the PDO::PGSQL_TRANSACTION_ERROR */\n    echo \"Test PDO::PGSQL_TRANSACTION_INERROR\\n\";\n    var_dump($db->inTransaction());\n    $db->rollBack();\n}\necho \"Test PDO::PGSQL_TRANSACTION_IDLE\\n\";\nvar_dump($db->inTransaction());\n} catch (Exception $e) {\n    /* catch exceptions so that we can show the relative error */\n    echo \"Exception! at line \", $e->getLine(), \"\\n\";\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
