// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pecl_bug_5772.phpt
  it("PDO Common: PECL Bug #5772 (PDO::FETCH_FUNC breaks on mixed case func name)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec(\"CREATE TABLE test (id int NOT NULL, PRIMARY KEY (id))\");\n$db->exec(\"INSERT INTO test (id) VALUES (1)\");\nfunction heLLO($row) {\n    return $row;\n}\nforeach ($db->query(\"SELECT * FROM test\")->fetchAll(PDO::FETCH_FUNC, 'heLLO') as $row) {\n    var_dump($row);\n}\n?>")).toMatchSnapshot();
  });
});
