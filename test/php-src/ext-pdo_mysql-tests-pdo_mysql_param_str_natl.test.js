// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_param_str_natl.phpt
  it("PDO MySQL national character set parameters don't affect true prepared statements", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\n$db->exec('CREATE TABLE test (bar NCHAR(4) NOT NULL)');\n$stmt = $db->prepare('INSERT INTO test VALUES(?)');\n$stmt->bindValue(1, 'foo', PDO::PARAM_STR | PDO::PARAM_STR_NATL);\n$stmt->execute();\nvar_dump($db->query('SELECT * from test'));\nforeach ($db->query('SELECT * from test') as $row) {\n    print_r($row);\n}\n?>")).toMatchSnapshot();
  });
});
