// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug44327.phpt
  it("Bug #44327 (PDORow::queryString property & numeric offsets / Crash)", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    $db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\n    $stmt = $db->prepare(\"SELECT 1 AS \\\"one\\\"\");\n    $stmt->execute();\n    $row = $stmt->fetch(PDO::FETCH_LAZY);\n    var_dump($row);\n    var_dump($row->{0});\n    var_dump($row->one);\n    var_dump($row->queryString);\n    print \"----------------------------------\\n\";\n    @$db->exec(\"DROP TABLE test\");\n    $db->exec(\"CREATE TABLE test (id INT)\");\n    $db->exec(\"INSERT INTO test(id) VALUES (1)\");\n    $stmt = $db->prepare(\"SELECT id FROM test\");\n    $stmt->execute();\n    $row = $stmt->fetch(PDO::FETCH_LAZY);\n    var_dump($row);\n    var_dump($row->queryString);\n    @$db->exec(\"DROP TABLE test\");\n    print \"----------------------------------\\n\";\n    $stmt = $db->prepare('foo');\n    @$stmt->execute();\n    $row = $stmt->fetch();\n    var_dump($row->queryString);\n?>")).toMatchSnapshot();
  });
});
