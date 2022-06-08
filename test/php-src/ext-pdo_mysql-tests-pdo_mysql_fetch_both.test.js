// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_fetch_both.phpt
  it("MySQL PDOStatement->fetch()", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    function fetch($offset, &$db, $query, $expect = null) {\n        try {\n            $stmt = $db->query('SELECT 1');\n            $num = $stmt->fetch(PDO::FETCH_NUM);\n            $stmt = $db->query('SELECT 1');\n            $assoc = $stmt->fetch(PDO::FETCH_ASSOC);\n            $stmt = $db->query('SELECT 1');\n            $both = $stmt->fetch(PDO::FETCH_BOTH);\n            $computed_both = array_merge($num, $assoc);\n            if ($computed_both != $both) {\n                printf(\"[%03d] Suspicious FETCH_BOTH result, dumping\\n\", $offset);\n                var_dump($computed_both);\n                var_dump($both);\n            }\n            if (!is_null($expect) && ($expect != $both)) {\n                printf(\"[%03d] Expected differs from returned data, dumping\\n\", $offset);\n                var_dump($expect);\n                var_dump($both);\n            }\n        } catch (PDOException $e) {\n            printf(\"[%03d] %s, [%s] %s\\n\",\n                $offset,\n                $e->getMessage(), $db->errroCode(), implode(' ', $db->errorInfo()));\n        }\n    }\n    try {\n        fetch(2, $db, 'SELECT 1', array(0 => '1', '1' => '1'));\n    } catch (PDOException $e) {\n        printf(\"[001] %s [%s] %s\\n\",\n            $e->getMessage(), $db->errorCode(), implode(' ', $db->errorInfo()));\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
