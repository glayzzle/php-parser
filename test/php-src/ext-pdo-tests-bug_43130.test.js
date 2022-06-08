// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_43130.phpt
  it("PDO Common: Bug #43130 (Bound parameters cannot have - in their name)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\nif ($db->getAttribute(PDO::ATTR_DRIVER_NAME) == 'mysql')\n    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);\n$db->exec(\"CREATE TABLE test (a varchar(100), b varchar(100), c varchar(100))\");\nfor ($i = 0; $i < 5; $i++) {\n    $db->exec(\"INSERT INTO test (a,b,c) VALUES('test\".$i.\"','\".$i.\"','\".$i.\"')\");\n}\n$stmt = $db->prepare(\"SELECT a FROM test WHERE b=:id-value\");\n$stmt->bindParam(':id-value', $id);\n$id = '1';\n$stmt->execute();\nvar_dump($stmt->fetch(PDO::FETCH_COLUMN));\n?>")).toMatchSnapshot();
  });
});
