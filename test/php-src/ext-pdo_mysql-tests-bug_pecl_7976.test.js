// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_pecl_7976.phpt
  it("PECL Bug #7976 (Calling stored procedure several times)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$db = MySQLPDOTest::factory();\nfunction bug_pecl_7976($db) {\n    $db->exec('DROP PROCEDURE IF EXISTS p');\n    $db->exec('CREATE PROCEDURE p() BEGIN SELECT \"1\" AS _one; END;');\n    $stmt = $db->query('CALL p()');\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    $stmt->closeCursor();\n    $stmt = $db->query('CALL p()');\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    $stmt->closeCursor();\n}\nprintf(\"Emulated...\\n\");\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);\nbug_pecl_7976($db);\nprintf(\"Native...\\n\");\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\nbug_pecl_7976($db);\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
