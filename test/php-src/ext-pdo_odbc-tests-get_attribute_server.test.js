// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_odbc/tests/get_attribute_server.phpt
  it("PDO ODBC getAttribute SERVER_INFO and SERVER_VERSION", function () {
    expect(parser.parseCode("<?php\nrequire 'ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory('ext/pdo_odbc/tests/common.phpt');\n// Obviously, we can't assume what driver is being used, so just check strings\n// Example driver output (MariaDB ODBC):\n// PDO::ATTR_SERVER_INFO: MariaDB\n// PDO::ATTR_SERVER_VERSION: 10.04.000018\n// As well as IBM i ODBC:\n// PDO::ATTR_SERVER_INFO: DB2/400 SQL\n// PDO::ATTR_SERVER_VERSION: 07.02.0015\nvar_dump($db->getAttribute(PDO::ATTR_SERVER_INFO));\nvar_dump($db->getAttribute(PDO::ATTR_SERVER_VERSION));")).toMatchSnapshot();
  });
});
