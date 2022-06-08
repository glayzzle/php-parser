// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_72788.phpt
  it("PDO Common: Bug #72788 (Invalid memory access when using persistent PDO connection)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\nputenv(\"PDOTEST_ATTR=\" . serialize(array(PDO::ATTR_PERSISTENT => true)));\nfunction test() {\n    $db = PDOTest::factory('PDO', false);\n    $stmt = @$db->query(\"SELECT 1 FROM TABLE_DOES_NOT_EXIST\");\n    if ($stmt === false) {\n        echo \"Statement failed as expected\\n\";\n    }\n}\ntest();\ntest();\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
