// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_61411.phpt
  it("Bug #61411 (PDO Segfaults with PERSISTENT == TRUE && EMULATE_PREPARES == FALSE)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$attr\t= getenv('PDOTEST_ATTR');\nif (!$attr) {\n    $attr = array();\n} else {\n    $attr = unserialize($attr);\n}\n$attr[PDO::ATTR_PERSISTENT] = true;\n$attr[PDO::ATTR_EMULATE_PREPARES] = false;\n$attr[PDO::ATTR_STRINGIFY_FETCHES] = true;\nputenv('PDOTEST_ATTR='.serialize($attr));\n$db = MySQLPDOTest::factory();\n$stmt = $db->prepare(\"SELECT 1\");\n$stmt->execute();\nforeach ($stmt as $line) {\n    var_dump($line);\n}\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
