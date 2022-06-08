// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_39858.phpt
  it("Bug #39858 (Lost connection to MySQL server during query by a repeated call stored proced)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\nfunction bug_39858($db) {\n    $db->exec(\"DROP PROCEDURE IF EXISTS p\");\n    $db->exec(\"\n        CREATE PROCEDURE p()\n            NOT DETERMINISTIC\n            CONTAINS SQL\n            SQL SECURITY DEFINER\n            COMMENT ''\n        BEGIN\n            SELECT 2 * 2;\n        END;\");\n    $stmt = $db->prepare(\"CALL p()\");\n    $stmt->execute();\n    do {\n        var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    } while ($stmt->nextRowset());\n    $stmt = $db->prepare(\"CALL p()\");\n    $stmt->execute();\n    do {\n        var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    } while ($stmt->nextRowset());\n    $stmt->closeCursor();\n}\nprintf(\"Emulated Prepared Statements...\\n\");\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);\nbug_39858($db);\nprintf(\"Native Prepared Statements...\\n\");\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\nbug_39858($db);\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
