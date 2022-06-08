// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_prepare_native_mixed_style.phpt
  it("MySQL PDO->prepare(), native PS, mixed, wired style", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    MySQLPDOTest::createTestTable($db);\n    $db->setAttribute(PDO::MYSQL_ATTR_DIRECT_QUERY, 0);\n    if (0 != $db->getAttribute(PDO::MYSQL_ATTR_DIRECT_QUERY))\n        printf(\"[002] Unable to turn off emulated prepared statements\\n\");\n    $stmt = $db->query('DELETE FROM test');\n    $stmt = $db->prepare('INSERT INTO test(id, label) VALUES (1, ?), (2, ?)');\n    $stmt->execute(array('a', 'b'));\n    $stmt = $db->prepare(\"SELECT id, label FROM test WHERE id = :placeholder AND label = (SELECT label AS 'SELECT' FROM test WHERE id = ?)\");\n    $stmt->execute(array(1, 1));\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
