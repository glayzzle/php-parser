// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_41125.phpt
  it("Bug #41125 (PDO mysql + quote() + prepare() can result in segfault)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\n$db->exec(\"DROP TABLE IF EXISTS test\");\n// And now allow the evil to do his work\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);\n$sql = \"CREATE TABLE IF NOT EXISTS test(id INT); INSERT INTO test(id) VALUES (1); SELECT * FROM test; INSERT INTO test(id) VALUES (2); SELECT * FROM test;\";\n$stmt = $db->query($sql);\ndo {\n    var_dump($stmt->fetchAll());\n} while ($stmt->nextRowset());\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
