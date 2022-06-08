// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug_49985.phpt
  it("Bug #49985 (pdo_pgsql prepare() re-use previous aborted transaction)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->exec(\"CREATE TABLE test (a int PRIMARY KEY)\");\nfor ($i = 0; $i < 3; $i++) {\n    try {\n        $db->beginTransaction();\n        $stmt = $db->prepare(\"INSERT INTO test (a) VALUES (?)\");\n        var_dump($stmt->execute(array(1)));\n        $db->commit();\n    } catch (Exception $e) {\n        echo trim(current(explode(\"\\n\", $e->getMessage()))).\"\\n\";\n        $db->rollback();\n    }\n}\n?>")).toMatchSnapshot();
  });
});
