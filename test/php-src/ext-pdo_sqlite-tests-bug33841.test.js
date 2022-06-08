// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug33841.phpt
  it("PDO SQLite Bug #33841 (rowCount() does not work on prepared statements)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->exec('CREATE TABLE test (text)');\n$stmt = $db->prepare(\"INSERT INTO test VALUES ( :text )\");\n$stmt->bindParam(':text', $name);\n$name = 'test1';\nvar_dump($stmt->execute(), $stmt->rowCount());\n$stmt = $db->prepare(\"UPDATE test SET text = :text \");\n$stmt->bindParam(':text', $name);\n$name = 'test2';\nvar_dump($stmt->execute(), $stmt->rowCount());\n?>")).toMatchSnapshot();
  });
});
