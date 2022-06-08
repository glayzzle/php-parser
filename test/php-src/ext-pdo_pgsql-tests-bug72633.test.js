// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug72633.phpt
  it("PDO PgSQL Bug #72633 (Postgres PDO lastInsertId() should work without specifying a sequence)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);\n$db->query('CREATE TABLE test_last_id (id SERIAL NOT NULL, field1 VARCHAR(10))');\n$stmt = $db->prepare(\"INSERT INTO test_last_id (field1) VALUES ('test')\");\n$stmt->execute();\n/**\n * No sequence name informed\n */\nvar_dump($db->lastInsertId());\n/**\n * Sequence name informed\n */\nvar_dump($db->lastInsertId('test_last_id_id_seq'));\n$db->query('DROP TABLE test_last_id');\n?>")).toMatchSnapshot();
  });
});
