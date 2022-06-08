// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_44159.phpt
  it("PDO Common: Bug #44159 (Crash: $pdo->setAttribute(PDO::STATEMENT_ATTR_CLASS, NULL))", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$pdo = PDOTest::factory();\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n$attrs = array(PDO::ATTR_STATEMENT_CLASS, PDO::ATTR_STRINGIFY_FETCHES);\nforeach ($attrs as $attr) {\n    try {\n        var_dump($pdo->setAttribute($attr, NULL));\n    } catch (\\Error $e) {\n        echo  get_class($e), ': ', $e->getMessage(), \\PHP_EOL;\n    }\n    try {\n        var_dump($pdo->setAttribute($attr, 1));\n    } catch (\\Error $e) {\n        echo  get_class($e), ': ', $e->getMessage(), \\PHP_EOL;\n    }\n    try {\n        var_dump($pdo->setAttribute($attr, 'nonsense'));\n    } catch (\\Error $e) {\n        echo  get_class($e), ': ', $e->getMessage(), \\PHP_EOL;\n    }\n}\n@unlink(__DIR__.\"/foo.db\");\n?>")).toMatchSnapshot();
  });
});
