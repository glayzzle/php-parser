// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_attr_init_command.phpt
  it("PDO::MYSQL_ATTR_INIT_COMMAND", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $dsn = MySQLPDOTest::getDSN();\n    $user = PDO_MYSQL_TEST_USER;\n    $pass = PDO_MYSQL_TEST_PASS;\n    $table = sprintf(\"test_%s\", md5(mt_rand(0, PHP_INT_MAX)));\n    $db = new PDO($dsn, $user, $pass);\n    $db->exec(sprintf('DROP TABLE IF EXISTS %s', $table));\n    $create = sprintf('CREATE TABLE %s(id INT)', $table);\n    var_dump($create);\n    $db = new PDO($dsn, $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => $create));\n    $db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\n    $info = $db->errorInfo();\n    var_dump($info[0]);\n    $db->exec(sprintf('INSERT INTO %s(id) VALUES (1)', $table));\n    $stmt = $db->query(sprintf('SELECT id FROM %s', $table));\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    $db->exec(sprintf('DROP TABLE IF EXISTS %s', $table));\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
