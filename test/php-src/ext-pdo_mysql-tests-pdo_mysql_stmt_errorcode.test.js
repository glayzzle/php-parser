// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_stmt_errorcode.phpt
  it("MySQL PDOStatement->errorCode();", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    $db->exec('DROP TABLE IF EXISTS ihopeitdoesnotexist');\n    printf(\"Testing emulated PS...\\n\");\n    try {\n        $db->setAttribute(PDO::MYSQL_ATTR_DIRECT_QUERY, 1);\n        if (1 != $db->getAttribute(PDO::MYSQL_ATTR_DIRECT_QUERY))\n            printf(\"[002] Unable to turn on emulated prepared statements\\n\");\n        $stmt = $db->prepare('SELECT id FROM ihopeitdoesnotexist ORDER BY id ASC');\n        $stmt->execute();\n        var_dump($stmt->errorCode());\n    } catch (PDOException $e) {\n        printf(\"[001] %s [%s] %s\\n\",\n            $e->getMessage(), $db->errorCode(), implode(' ', $db->errorInfo()));\n    }\n    printf(\"Testing native PS...\\n\");\n    try {\n        $db->setAttribute(PDO::MYSQL_ATTR_DIRECT_QUERY, 0);\n        if (0 != $db->getAttribute(PDO::MYSQL_ATTR_DIRECT_QUERY))\n            printf(\"[004] Unable to turn off emulated prepared statements\\n\");\n        $stmt = $db->prepare('SELECT id FROM ihopeitdoesnotexist ORDER BY id ASC');\n        $stmt->execute();\n        var_dump($stmt->errorCode());\n    } catch (PDOException $e) {\n        printf(\"[003] %s [%s] %s\\n\",\n            $e->getMessage(), $db->errorCode(), implode(' ', $db->errorInfo()));\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
