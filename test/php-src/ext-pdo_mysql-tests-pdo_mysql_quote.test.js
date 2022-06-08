// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_quote.phpt
  it("MySQL ensure quote function returns expected results", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$db = MySQLPDOTest::factory();\nvar_dump($db->quote('foo', PDO::PARAM_STR));\nvar_dump($db->quote('foo', PDO::PARAM_STR | PDO::PARAM_STR_CHAR));\nvar_dump($db->quote('über', PDO::PARAM_STR | PDO::PARAM_STR_NATL));\nvar_dump($db->getAttribute(PDO::ATTR_DEFAULT_STR_PARAM) === PDO::PARAM_STR_CHAR);\n$db->setAttribute(PDO::ATTR_DEFAULT_STR_PARAM, PDO::PARAM_STR_NATL);\nvar_dump($db->getAttribute(PDO::ATTR_DEFAULT_STR_PARAM) === PDO::PARAM_STR_NATL);\nvar_dump($db->quote('foo', PDO::PARAM_STR | PDO::PARAM_STR_CHAR));\nvar_dump($db->quote('über', PDO::PARAM_STR));\nvar_dump($db->quote('über', PDO::PARAM_STR | PDO::PARAM_STR_NATL));\n?>")).toMatchSnapshot();
  });
});
