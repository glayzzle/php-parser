// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug53551.phpt
  it("Bug #44327 (PDORow::queryString property & numeric offsets / Crash)", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc';\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\n$createSql = \"CREATE TABLE `bug53551` (\n  `count` bigint(20) unsigned NOT NULL DEFAULT '0'\n)\";\n$db->exec('drop table if exists bug53551');\n$db->exec($createSql);\n$db->exec(\"insert into bug53551 set `count` = 1 \");\n$db->exec(\"SET sql_mode = 'Traditional'\");\n$sql = 'UPDATE bug53551 SET `count` = :count';\n$stmt = $db->prepare($sql);\n$values = array (\n    'count' => NULL,\n);\necho \"1\\n\";\n$stmt->execute($values);\nvar_dump($stmt->errorInfo());\necho \"2\\n\";\n$stmt->execute($values);\nvar_dump($stmt->errorInfo());\necho \"\\ndone\\n\";\n?>")).toMatchSnapshot();
  });
});
