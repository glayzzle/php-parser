// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_stmt_multiquery.phpt
  it("PDOStatements and multi query", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    function mysql_stmt_multiquery_wrong_usage($db) {\n        $stmt = $db->query('SELECT label FROM test ORDER BY id ASC LIMIT 1; SELECT label FROM test ORDER BY id ASC LIMIT 1');\n        var_dump($stmt->errorInfo());\n        var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n        var_dump($stmt->errorInfo());\n    }\n    function mysql_stmt_multiquery_proper_usage($db) {\n        $stmt = $db->query('SELECT label FROM test ORDER BY id ASC LIMIT 1; SELECT label FROM test ORDER BY id ASC LIMIT 1');\n        do {\n            var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n        } while ($stmt->nextRowset());\n    }\n    try {\n        printf(\"Emulated Prepared Statements...\\n\");\n        $db = MySQLPDOTest::factory();\n        MySQLPDOTest::createTestTable($db);\n        $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);\n        mysql_stmt_multiquery_wrong_usage($db);\n        mysql_stmt_multiquery_proper_usage($db);\n        printf(\"Native Prepared Statements...\\n\");\n        $db = MySQLPDOTest::factory();\n        MySQLPDOTest::createTestTable($db);\n        $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\n        mysql_stmt_multiquery_wrong_usage($db);\n        mysql_stmt_multiquery_proper_usage($db);\n    } catch (PDOException $e) {\n        printf(\"[001] %s [%s] %s\\n\",\n            $e->getMessage(), $db->errorCode(), implode(' ', $db->errorInfo()));\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
