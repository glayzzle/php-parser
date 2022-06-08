// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_44173.phpt
  it("PDO Common: Bug #44173 (PDO->query() parameter parsing/checking needs an update)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec(\"CREATE TABLE test (x int)\");\n$db->exec(\"INSERT INTO test VALUES (1)\");\n// Bug entry [2] -- 1 is PDO::FETCH_LAZY\ntry {\n    $stmt = $db->query(\"SELECT * FROM test\", PDO::FETCH_LAZY, 0, []);\n    var_dump($stmt);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n// Bug entry [3]\ntry {\n    $stmt = $db->query(\"SELECT * FROM test\", 'abc');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n// Bug entry [4]\ntry {\n    $stmt = $db->query(\"SELECT * FROM test\", PDO::FETCH_CLASS, 0, 0, 0);\n    var_dump($stmt);\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n// Bug entry [5]\ntry {\n    $stmt = $db->query(\"SELECT * FROM test\", PDO::FETCH_INTO);\n    var_dump($stmt);\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n// Bug entry [6]\ntry {\n    $stmt = $db->query(\"SELECT * FROM test\", PDO::FETCH_COLUMN);\n    var_dump($stmt);\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n// Bug entry [7]\ntry {\n    $stmt = $db->query(\"SELECT * FROM test\", PDO::FETCH_CLASS);\n    var_dump($stmt);\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
