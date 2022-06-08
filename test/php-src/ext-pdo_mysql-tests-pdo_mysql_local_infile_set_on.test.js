// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_local_infile_set_on.phpt
  it("enable local infile", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'config.inc');\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$dsn = MySQLPDOTest::getDSN();\n$user = PDO_MYSQL_TEST_USER;\n$pass = PDO_MYSQL_TEST_PASS;\n$db = new PDO($dsn, $user, $pass, array(PDO::MYSQL_ATTR_LOCAL_INFILE => true));\necho var_export($db->getAttribute(PDO::MYSQL_ATTR_LOCAL_INFILE)), \"\\n\";\necho \"done!\\n\";\n?>")).toMatchSnapshot();
  });
});
