// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug48764.phpt
  it("Bug #48764 (PDO_pgsql::query always uses implicit prepared statements if v3 proto available)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\necho \"Test 1\\n\";\nbug($db);\necho \"Test 2\\n\";\nbug($db, array(PDO::ATTR_EMULATE_PREPARES => 0));\nbug($db, array(PDO::ATTR_EMULATE_PREPARES => 1));\necho \"Test 3\\n\";\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);\nbug($db);\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\nbug($db);\nputenv('PDOTEST_ATTR='.serialize(array(\n    PDO::ATTR_EMULATE_PREPARES => 1,\n)));\n$db = PDOTest::factory('PDO', false);\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\necho \"Test 4\\n\";\nbug($db);\nbug($db, array(PDO::ATTR_EMULATE_PREPARES => 0));\nputenv('PDOTEST_ATTR');\nfunction bug($db, $options = array()) {\n    try {\n        $stmt = $db->prepare(\"SELECT ?\", $options);\n        $stmt->execute(array(1));\n        echo \"OK\\n\";\n    } catch (PDOException $e) {\n        // Indetermined data type when using native prepared statements\n        echo $e->getCode().\"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
