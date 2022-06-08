// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_039.phpt
  it("PDO Common: errorCode()", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\n$dsn = getenv('PDOTEST_DSN');\n$user = getenv('PDOTEST_USER');\n$pass = getenv('PDOTEST_PASS');\n$attr = getenv('PDOTEST_ATTR');\nif (is_string($attr) && strlen($attr)) {\n    $attr = unserialize($attr);\n} else {\n    $attr = null;\n}\nif ($user === false) $user = NULL;\nif ($pass === false) $pass = NULL;\n$conn = new PDO($dsn, $user, $pass, $attr);\n$query = 'SELECT 1';\nvar_dump($conn->errorCode());\n$stmt = $conn->prepare($query);\nvar_dump($conn->errorCode());\nvar_dump($stmt->errorCode());\n$stmt->execute();\nvar_dump($stmt->errorCode());\n?>")).toMatchSnapshot();
  });
});
