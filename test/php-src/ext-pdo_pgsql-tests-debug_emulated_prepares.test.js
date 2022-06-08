// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/debug_emulated_prepares.phpt
  it("PDO PgSQL PDOStatement::debugDumpParams() with emulated prepares", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\n$stmt = $db->prepare('SELECT :bool, :int, :string, :null');\n$stmt->bindValue(':bool', true, PDO::PARAM_BOOL);\n$stmt->bindValue(':int', 123, PDO::PARAM_INT);\n$stmt->bindValue(':string', 'foo', PDO::PARAM_STR);\n$stmt->bindValue(':null', null, PDO::PARAM_NULL);\n$stmt->execute();\nvar_dump($stmt->debugDumpParams());\n?>")).toMatchSnapshot();
  });
});
