// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/disable_prepares.phpt
  it("PDO PgSQL PGSQL_ATTR_DISABLE_PREPARES", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_COLUMN);\n$stmt = $db->prepare(\"SELECT statement FROM pg_prepared_statements\", array(\n    PDO::ATTR_EMULATE_PREPARES => true));\n$stmt2 = $db->prepare(\"SELECT (?)::int2\");\n$stmt2->execute(array(1));\nvar_dump($stmt2->fetch());\n$stmt2->execute(array(2));\nvar_dump($stmt2->fetch());\n$stmt->execute();\n$first = $stmt->fetchAll();\n$stmt3 = $db->prepare(\"SELECT (?)::int4\", array(\n    PDO::PGSQL_ATTR_DISABLE_PREPARES => true));\n$stmt3->execute(array(3));\nvar_dump($stmt3->fetch());\n$stmt3->execute(array(4));\nvar_dump($stmt3->fetch());\n$stmt->execute();\n$second = $stmt->fetchAll();\nvar_dump($first, $second);\n?>")).toMatchSnapshot();
  });
});
