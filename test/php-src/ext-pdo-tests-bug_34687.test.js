// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_34687.phpt
  it("PDO Common: Bug #34687 (query doesn't return error information)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);\n$x = $db->query(\"UPDATE non_existent_pdo_test_table set foo = 'bar'\");\nvar_dump($x);\n$code = $db->errorCode();\nif ($code !== '00000' && strlen($code)) {\n    echo \"OK: $code\\n\";\n} else {\n    echo \"ERR: $code\\n\";\n    print_r($db->errorInfo());\n}\n?>")).toMatchSnapshot();
  });
});
