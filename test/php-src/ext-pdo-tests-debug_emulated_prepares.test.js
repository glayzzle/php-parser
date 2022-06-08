// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/debug_emulated_prepares.phpt
  it("PDO Common: PDOStatement::debugDumpParams() with emulated prepares", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\n$stmt = $db->query('SELECT 1');\n// \"Sent SQL\" shouldn't display\nvar_dump($stmt->debugDumpParams());\n$stmt = $db->prepare('SELECT :bool, :int, :string, :null');\n$stmt->bindValue(':bool', true, PDO::PARAM_BOOL);\n$stmt->bindValue(':int', 123, PDO::PARAM_INT);\n$stmt->bindValue(':string', 'foo', PDO::PARAM_STR);\n$stmt->bindValue(':null', null, PDO::PARAM_NULL);\n$stmt->execute();\n// \"Sent SQL\" should display\nvar_dump($stmt->debugDumpParams());\n?>")).toMatchSnapshot();
  });
});
