// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_43371.phpt
  it("Bug #43371 (Memory errors in PDO constructor)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$dsn = MySQLPDOTest::getDSN();\n$db = new PDO($dsn, PDO_MYSQL_TEST_USER, PDO_MYSQL_TEST_PASS, array(PDO::ATTR_PERSISTENT => true));\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
