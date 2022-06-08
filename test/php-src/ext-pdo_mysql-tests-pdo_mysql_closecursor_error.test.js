// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_closecursor_error.phpt
  it("Error during closeCursor() of multi query", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\n$stmt = $db->query('SELECT 1; SELECT x FROM does_not_exist');\nvar_dump($stmt->fetchAll());\nvar_dump($stmt->closeCursor());\n?>")).toMatchSnapshot();
  });
});
