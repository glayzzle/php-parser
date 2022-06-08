// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_stmt_rowcount.phpt
  it("MySQL PDOStatement->rowCount() @ SELECT", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    MySQLPDOTest::createTestTable($db);\n    try {\n        if (0 !== ($tmp = $db->query('SELECT id FROM test WHERE 1 = 0')->rowCount()))\n            printf(\"[002] Expecting 0 got %s\", var_export($tmp, true));\n        if (1 !== ($tmp = $db->query('SELECT id FROM test WHERE id = 1')->rowCount()))\n            printf(\"[003] Expecting 1 got %s\", var_export($tmp, true));\n    } catch (PDOException $e) {\n        printf(\"[001] %s [%s] %s\\n\",\n            $e->getMessage(), $db->errorCode(), implode(' ', $db->errorInfo()));\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
