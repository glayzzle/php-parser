// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_prepare_native_column.phpt
  it("MySQL PDO->prepare(), native PS, named placeholder", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    MySQLPDOTest::createTestTable($db);\n    $db->setAttribute(PDO::MYSQL_ATTR_DIRECT_QUERY, 0);\n    if (0 != $db->getAttribute(PDO::MYSQL_ATTR_DIRECT_QUERY))\n        printf(\"[002] Unable to turn off emulated prepared statements\\n\");\n    $stmt = $db->prepare(\"SELECT :param FROM test ORDER BY id ASC LIMIT 1\");\n    $stmt->execute(array(':param' => 'id'));\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    $db->prepare('SELECT :placeholder FROM test WHERE :placeholder > :placeholder');\n    $stmt->execute(array(':placeholder' => 'test'));\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
