// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_45120.phpt
  it("Bug #45120 (PDOStatement->execute() returns true then false for same statement)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\nfunction bug_45120($db) {\n    $stmt = $db->prepare(\"SELECT 1 AS 'one'\");\n    if (true !== $stmt->execute())\n        printf(\"[001] Execute has failed: %s\\n\", var_export($stmt->errorInfo(), true));\n    $res = $stmt->fetch(PDO::FETCH_ASSOC);\n    if ($res['one'] != 1)\n        printf(\"[002] Wrong results: %s\\n\", var_export($res, true));\n    if (true !== $stmt->execute())\n        printf(\"[003] Execute has failed: %s\\n\", var_export($stmt->errorInfo(), true));\n    $res = $stmt->fetch(PDO::FETCH_ASSOC);\n    if ($res['one'] != 1)\n        printf(\"[004] Wrong results: %s\\n\", var_export($res, true));\n}\nprint \"Emulated Prepared Statements\\n\";\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);\nbug_45120($db);\nprint \"Native Prepared Statements\\n\";\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\nbug_45120($db);\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
