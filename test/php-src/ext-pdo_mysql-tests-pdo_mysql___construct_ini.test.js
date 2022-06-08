// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql___construct_ini.phpt
  it("MySQL PDO->__construct() - URI", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $found = false;\n    $values = ini_get_all();\n    foreach ($values as $name => $dsn)\n        if ('pdo.dsn.mysql' == $name) {\n            printf(\"pdo.dsn.mysql=%s\\n\", $dsn);\n            $found = true;\n            break;\n        }\n    if (!$found) {\n        $dsn = ini_get('pdo.dsn.mysql');\n        $found = ($dsn !== false);\n    }\n    if (!$found)\n        printf(\"pdo.dsn.mysql cannot be accessed through ini_get_all()/ini_get()\\n\");\n    if (MySQLPDOTest::getDSN() == $dsn) {\n        // we are lucky, we can run the test\n        try {\n            $user = PDO_MYSQL_TEST_USER;\n            $pass\t= PDO_MYSQL_TEST_PASS;\n            $db = new PDO('mysql', $user, $pass);\n        } catch (PDOException $e) {\n            printf(\"[001] %s, [%s] %s\\n\",\n                $e->getMessage(),\n                (is_object($db)) ? $db->errorCode() : 'n/a',\n                (is_object($db)) ? implode(' ', $db->errorInfo()) : 'n/a');\n        }\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
