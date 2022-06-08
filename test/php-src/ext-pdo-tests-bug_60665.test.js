// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_60665.phpt
  it("PDO Common: Bug #60665 (call to empty() on NULL result using PDO::FETCH_LAZY returns false)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\nswitch ($db->getAttribute(PDO::ATTR_DRIVER_NAME)) {\n    case 'oci': $from = 'from dual'; break;\n    case 'firebird': $from = 'from rdb$database'; break;\n    default: $from = ''; break;\n}\n$statement = $db->prepare(\"SELECT NULL AS null_value, 0 AS zero, 1 AS one $from\");\n$statement->execute();\n$row = $statement->fetch(PDO::FETCH_LAZY);\nvar_dump(\n    empty($row->null_value),\n    empty($row->zero),\n    !empty($row->one),\n    empty($row->missing),\n    !isset($row->null_value),\n    isset($row->zero),\n    isset($row->one),\n    !isset($row->missing)\n);\n?>")).toMatchSnapshot();
  });
});
