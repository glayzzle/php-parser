// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_attr_connection_status.phpt
  it("PDO::ATTR_CONNECTION_STATUS", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    $status = $db->getAttribute(PDO::ATTR_CONNECTION_STATUS);\n    if (!is_string($status))\n        printf(\"[002] Expecting string, got '%s'\\n\", var_export($status, true));\n    if ('' == $status)\n        printf(\"[003] Connection status string must not be empty\\n\");\n    if (false !== $db->setAttribute(PDO::ATTR_CONNECTION_STATUS, 'my own connection status'))\n        printf(\"[004] Changing read only attribute\\n\");\n    $status2 = $db->getAttribute(PDO::ATTR_CONNECTION_STATUS);\n    if ($status !== $status2)\n        printf(\"[005] Connection status should not have changed\\n\");\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
