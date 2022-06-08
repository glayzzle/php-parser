// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_42499.phpt
  it("Bug #42499 (Multi-statement execution via PDO::exec() makes connection unusable)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$db = MySQLPDOTest::factory();\nfunction bug_42499($db) {\n    $db->exec('DROP TABLE IF EXISTS test');\n    $db->exec(\"CREATE TABLE test(id CHAR(1)); INSERT INTO test(id) VALUES ('a')\");\n    $stmt = $db->query('SELECT id AS _id FROM test');\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    // You must not use exec() to run statements that create a result set!\n    $db->exec('SELECT id FROM test');\n    // This will bail at you because you have not fetched the SELECT results: this is not a bug!\n    $db->exec(\"INSERT INTO test(id) VALUES ('b')\");\n}\nprint \"Emulated Prepared Statements...\\n\";\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);\n$db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, 1);\nbug_42499($db);\nprint \"Native Prepared Statements...\\n\";\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\n$db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, 1);\nbug_42499($db);\n$db = MySQLPDOTest::factory();\n$db->exec('DROP TABLE IF EXISTS test');\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
