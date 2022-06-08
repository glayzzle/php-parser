// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_phpinfo.phpt
  it("MySQL PDO phpinfo() output", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    ob_start();\n    phpinfo();\n    $tmp = ob_get_contents();\n    ob_end_clean();\n    /*\tPDO Driver for MySQL, client library version => 6.0.3-alpha\t*/\n    $reg = 'Client API version.*' . preg_quote($db->getAttribute(PDO::ATTR_CLIENT_VERSION), '/');\n    if (!preg_match(\"/$reg/\", $tmp)) {\n        printf(\"[001] Cannot find MySQL PDO driver line in phpinfo() output\\n\");\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
