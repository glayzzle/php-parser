// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_interface.phpt
  it("MySQL PDO class interface", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    $expected = array(\n        '__construct'\t\t\t\t\t\t\t=> true,\n        'prepare' \t\t\t\t\t\t\t=> true,\n        'beginTransaction'\t\t\t\t\t\t=> true,\n        'commit'\t\t\t\t\t\t\t=> true,\n        'rollBack'\t\t\t\t\t\t\t=> true,\n        'setAttribute'\t\t\t\t\t\t\t=> true,\n        'exec'\t\t\t\t\t\t\t\t=> true,\n        'query'\t\t\t\t\t\t\t\t=> true,\n        'lastInsertId'\t\t\t\t\t\t\t=> true,\n        'errorCode'\t\t\t\t\t\t\t=> true,\n        'errorInfo'\t\t\t\t\t\t\t=> true,\n        'getAttribute'\t\t\t\t\t\t\t=> true,\n        'quote'\t\t\t\t\t\t\t\t=> true,\n        'inTransaction'\t\t\t\t\t\t\t=> true,\n        'getAvailableDrivers'\t=> true,\n    );\n    $classname = get_class($db);\n    $methods = get_class_methods($classname);\n    foreach ($methods as $k => $method) {\n        if (isset($expected[$method])) {\n            unset($expected[$method]);\n            unset($methods[$k]);\n        }\n        if ($method == $classname) {\n            unset($expected['__construct']);\n            unset($methods[$k]);\n        }\n    }\n    if (!empty($expected)) {\n        printf(\"Dumping missing class methods\\n\");\n        var_dump($expected);\n    }\n    if (!empty($methods)) {\n        printf(\"Found more methods than expected, dumping list\\n\");\n        var_dump($methods);\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
