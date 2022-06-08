// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_bit.phpt
  it("MySQL PDO->exec(), BIT columns - remove after fix!", function () {
    expect(parser.parseCode("<?php\n    /* TODO: remove this test after fix and enable the BIT test in pdo_mysql_types.phpt again */\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    function test_type(&$db, $offset, $sql_type, $value, $ret_value = NULL, $pattern = NULL) {\n        $db->exec('DROP TABLE IF EXISTS test');\n        $sql = sprintf('CREATE TABLE test(id INT, label %s) ENGINE=%s', $sql_type, MySQLPDOTest::getTableEngine());\n        @$db->exec($sql);\n        if ($db->errorCode() != 0) {\n            // not all MySQL Server versions and/or engines might support the type\n            return true;\n        }\n        $stmt = $db->prepare('INSERT INTO test(id, label) VALUES (?, ?)');\n        $stmt->bindValue(1, $offset);\n        $stmt->bindValue(2, $value);\n        if (!$stmt->execute()) {\n            printf(\"[%03d + 1] INSERT failed, %s\\n\", $offset, var_export($stmt->errorInfo(), true));\n            return false;\n        }\n        $stmt = $db->query('SELECT  id, label FROM test');\n        $row = $stmt->fetch(PDO::FETCH_ASSOC);\n        var_dump($row);\n        var_dump($value);\n        return true;\n    }\n    $db = MySQLPDOTest::factory();\n    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\n    $db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\n    test_type($db, 20, 'BIT(8)', 1);\n    echo \"done!\\n\";\n?>")).toMatchSnapshot();
  });
});
