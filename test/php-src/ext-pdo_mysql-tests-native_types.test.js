// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/native_types.phpt
  it("PDO MySQL should use native types if ATTR_STRINGIFY_FETCHES is not enabled", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->exec('DROP TABLE IF EXISTS test');\n$db->exec('CREATE TABLE test (i INT, f FLOAT)');\n$db->exec('INSERT INTO test VALUES (42, 42.5)');\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\nvar_dump($db->query('SELECT * FROM test')->fetchAll(PDO::FETCH_ASSOC));\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\nvar_dump($db->query('SELECT * FROM test')->fetchAll(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
