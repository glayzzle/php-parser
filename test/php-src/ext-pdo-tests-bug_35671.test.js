// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_35671.phpt
  it("PDO Common: Bug #35671 (binding by name breakage)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE test (field1 VARCHAR(32), field2 VARCHAR(32), field3 VARCHAR(32))');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$insert = $db->prepare(\"insert into test (field1, field2, field3) values (:value1, :value2, :value3)\");\n$parm = array(\n    \":value1\" => 15,\n    \":value2\" => 20,\n    \":value3\" => 25\n);\n$insert->execute($parm);\n$insert = null;\nvar_dump($db->query(\"SELECT * from test\")->fetchAll(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
