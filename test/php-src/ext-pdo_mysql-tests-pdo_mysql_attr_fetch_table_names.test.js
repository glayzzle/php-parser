// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_attr_fetch_table_names.phpt
  it("PDO::ATTR_FETCH_TABLE_NAMES", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    MySQLPDOTest::createTestTable($db);\n    $db->setAttribute(PDO::ATTR_FETCH_TABLE_NAMES, 1);\n    $stmt = $db->query('SELECT label FROM test LIMIT 1');\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    $stmt->closeCursor();\n    $db->setAttribute(PDO::ATTR_FETCH_TABLE_NAMES, 0);\n    $stmt = $db->query('SELECT label FROM test LIMIT 1');\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    $stmt->closeCursor();\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
