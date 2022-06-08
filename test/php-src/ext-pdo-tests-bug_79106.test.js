// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_79106.phpt
  it("Bug #79106 (PDO may fetch wrong column indexes with PDO::FETCH_BOTH)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR=' . dirname(__FILE__) . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$stmt = $db->query('SELECT 0 as \"2007\", 0 as \"2008\", 0 as \"2020\"');\nvar_dump($stmt->fetchAll());\n?>")).toMatchSnapshot();
  });
});
