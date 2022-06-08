// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_74376.phpt
  it("Bug #74376 (Invalid free of persistent results on error/connection loss)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$attr = getenv('PDOTEST_ATTR');\n$attr = $attr ? unserialize($attr) : [];\n$attr[PDO::ATTR_PERSISTENT] = true;\n$attr[PDO::ATTR_EMULATE_PREPARES] = false;\nputenv('PDOTEST_ATTR=' . serialize($attr));\n$db = MySQLPDOTest::factory();\n$stmt = $db->query(\"select (select 1 union select 2)\");\nprint \"ok\";\n?>")).toMatchSnapshot();
  });
});
