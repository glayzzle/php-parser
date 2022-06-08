// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pecl_bug_5780.phpt
  it("PDO MySQL PECL Bug #5780 (Failure to produce an error when one is expected)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__. '/common.phpt');\n$db->exec(\"CREATE TABLE test (login varchar(32) NOT NULL, data varchar(64) NOT NULL)\");\n$db->exec(\"CREATE TABLE test2 (login varchar(32) NOT NULL, password varchar(64) NOT NULL)\");\n$db->exec(\"INSERT INTO test2 (login, password) VALUES ('testing', 'testing')\");\n$db->exec(\"INSERT INTO test2 (login, password) VALUES ('test2', 'testpw2')\");\n$logstmt = $db->prepare('INSERT INTO test (login, data) VALUES (:var1, :var2)');\n$authstmt = $db->prepare('SELECT * FROM test2 WHERE login = :varlog AND password = :varpass');\n$authstmt->execute(array(':varlog' => 'testing', ':varpass' => 'testing'));\nvar_dump($authstmt->fetch(PDO::FETCH_NUM));\n@var_dump($logstmt->execute(array(':var1' => 'test1', ':var2' => 'test2')));\n$info = $logstmt->errorInfo();\nunset($info[2]);\nvar_dump($info);\n?>")).toMatchSnapshot();
  });
});
