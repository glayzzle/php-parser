// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_52098.phpt
  it("PDO Common: Bug #52098 Own PDOStatement implementation ignore __call()", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n@$db->exec(\"DROP TABLE test\");\n$db->exec(\"CREATE TABLE test (x int)\");\n$db->exec(\"INSERT INTO test VALUES (1)\");\nclass MyStatement extends PDOStatement\n{\n    public function __call($name, $arguments)\n    {\n        echo \"Calling object method '$name'\" . implode(', ', $arguments). \"\\n\";\n    }\n}\n/*\nTest prepared statement with PDOStatement class.\n*/\n$derived = $db->prepare('SELECT * FROM test', array(PDO::ATTR_STATEMENT_CLASS=>array('MyStatement')));\n$derived->execute();\n$derived->foo();\n$derived->fetchAll();\n$derived = null;\n/*\nTest regular statement with PDOStatement class.\n*/\n$db->setAttribute(PDO::ATTR_STATEMENT_CLASS, array('MyStatement'));\n$r =  $db->query('SELECT * FROM test');\necho $r->bar();\n$r->fetchAll();\n$r = null;\n/*\nTest object instance of PDOStatement class.\n*/\n$obj = new MyStatement;\necho $obj->lucky();\n$db->exec(\"DROP TABLE test\");\n?>")).toMatchSnapshot();
  });
});
