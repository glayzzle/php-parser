// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_attr_client_version.phpt
  it("PDO::ATTR_CLIENT_VERSION", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    assert(('' == $db->errorCode()) || ('00000' == $db->errorCode()));\n    $version = $db->getAttribute(PDO::ATTR_CLIENT_VERSION);\n    // No more constraints - mysqlnd and libmysql return different strings at least\n    // with mysqli. Return type check is already performed in the generic test.\n    // According to the manual we should get an int but as of today we do get a string...\n    if ('' == $version)\n        printf(\"[001] Client version must not be empty\\n\");\n    // Read-only\n    if (false !== $db->setAttribute(PDO::ATTR_CLIENT_VERSION, '1.0'))\n        printf(\"[002] Wonderful, I can change the client version!\\n\");\n    $new_version = $db->getAttribute(PDO::ATTR_CLIENT_VERSION);\n    if ($new_version !== $version)\n        printf(\"[003] Did we change it from '%s' to '%s'?\\n\", $version, $new_version);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
