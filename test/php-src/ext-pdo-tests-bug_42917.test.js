// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_42917.phpt
  it("PDO Common: Bug #42917 (PDO::FETCH_KEY_PAIR doesn't work with setFetchMode)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec(\"CREATE TABLE test (a varchar(100), b varchar(100), c varchar(100))\");\nfor ($i = 0; $i < 5; $i++) {\n    $db->exec(\"INSERT INTO test (a,b,c) VALUES('test\".$i.\"','\".$i.\"','\".$i.\"')\");\n}\n$res = $db->query(\"SELECT a,b FROM test\");\n$res->setFetchMode(PDO::FETCH_KEY_PAIR);\nvar_dump($res->fetchAll());\n?>")).toMatchSnapshot();
  });
});
