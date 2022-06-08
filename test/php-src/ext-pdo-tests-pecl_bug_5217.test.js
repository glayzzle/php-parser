// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pecl_bug_5217.phpt
  it("PDO Common: PECL Bug #5217 (serialize/unserialize safety)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\ntry {\n    $ser = serialize($db);\n    debug_zval_dump($ser);\n    $db = unserialize($ser);\n    $db->exec('CREATE TABLE test (id int NOT NULL PRIMARY KEY, val VARCHAR(10))');\n} catch (Exception $e) {\n    echo \"Safely caught \" . $e->getMessage() . \"\\n\";\n}\necho \"PHP Didn't crash!\\n\";\n?>")).toMatchSnapshot();
  });
});
