// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_79106_collision.phpt
  it("Bug #79106 (PDO may fetch wrong column indexes with PDO::FETCH_BOTH) - collision", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR=' . dirname(__FILE__) . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$stmt = $db->query('SELECT 11111 as \"1\", 22222 as \"2\"');\nvar_dump($stmt->fetchAll());\n?>")).toMatchSnapshot();
  });
});
