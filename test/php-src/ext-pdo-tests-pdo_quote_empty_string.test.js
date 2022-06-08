// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_quote_empty_string.phpt
  it("PDO::quote() must accept empty string for drivers which support this feature", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$pdo = PDOTest::factory();\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\ntry {\n    $result = $pdo->quote('');\n    if (!is_string($result)) {\n        var_dump($result);\n    }\n} catch (\\PDOException) {\n    // Do nothing as quoting is not supported with this driver\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
