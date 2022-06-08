// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_44707.phpt
  it("Bug #44707 (The MySQL PDO driver resets variable content after bindParam on tinyint field)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\nfunction bug_44707($db) {\n    $db->exec('DROP TABLE IF EXISTS test');\n    $db->exec('CREATE TABLE test(id INT, mybool TINYINT)');\n    $id = 1;\n    $mybool = false;\n    var_dump($mybool);\n    $stmt = $db->prepare('INSERT INTO test(id, mybool) VALUES (?, ?)');\n    $stmt->bindParam(1, $id);\n    $stmt->bindParam(2, $mybool, PDO::PARAM_BOOL);\n    var_dump($mybool);\n    $stmt->execute();\n    var_dump($mybool);\n    $stmt = $db->query('SELECT * FROM test');\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    $stmt = $db->prepare('INSERT INTO test(id, mybool) VALUES (?, ?)');\n    $stmt->bindParam(1, $id);\n    // INT and integer work well together\n    $stmt->bindParam(2, $mybool, PDO::PARAM_INT);\n    $stmt->execute();\n    $stmt = $db->query('SELECT * FROM test');\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n}\n/*\n// This is beyond the control of the driver... - the driver never gets in touch with bound values\nprint \"Emulated Prepared Statements\\n\";\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);\nbug_44707($db);\n*/\nprint \"Native Prepared Statements\\n\";\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\nbug_44707($db);\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
