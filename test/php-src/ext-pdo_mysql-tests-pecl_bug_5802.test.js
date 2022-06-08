// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pecl_bug_5802.phpt
  it("PDO MySQL PECL Bug #5802 (bindParam/bindValue retain the is_null flag)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__. '/common.phpt');\n$db->exec('create table test ( bar char(3) NULL )');\n$stmt = $db->prepare('insert into test (bar) values(:bar)') or var_dump($db->errorInfo());\n$bar = 'foo';\n$stmt->bindParam(':bar', $bar);\n$stmt->execute() or var_dump($stmt->errorInfo());\n$bar = null;\n$stmt->bindParam(':bar', $bar);\n$stmt->execute() or var_dump($stmt->errorInfo());\n$bar = 'qaz';\n$stmt->bindParam(':bar', $bar);\n$stmt->execute() or var_dump($stmt->errorInfo());\n$stmt = $db->prepare('select * from test') or var_dump($db->errorInfo());\nif($stmt) $stmt->execute();\nif($stmt) var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
