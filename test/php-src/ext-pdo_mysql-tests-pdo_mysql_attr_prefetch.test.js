// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_attr_prefetch.phpt
  it("PDO::ATTR_PREFETCH", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    var_dump($db->getAttribute(PDO::ATTR_PREFETCH));\n    var_dump($db->setAttribute(PDO::ATTR_PREFETCH, true));\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
