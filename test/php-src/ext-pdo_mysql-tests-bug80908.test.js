// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug80908.phpt
  it("Bug #80908: pdo_mysql lastInsertId() return wrong, when table id bigger than the maximum value of int64", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\nfunction createDB(): PDO {\n    $db = MySQLPDOTest::factory();\n    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\n    return $db;\n}\n$db = createDB();\n$db->exec('DROP TABLE IF EXISTS test');\n$db->exec('CREATE TABLE test (`id` bigint(20) unsigned AUTO_INCREMENT, `name` varchar(5), primary key (`id`)) ENGINE = InnoDB AUTO_INCREMENT=10376293541461622799');\nfunction testLastInsertId(PDO $db) {\n    echo \"Running test lastInsertId\\n\";\n    $db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, false);\n    try {\n        $db->exec(\"insert into test (`name`) values ('bar')\");\n        $id = $db->lastInsertId();\n        echo \"Last insert id is \" . $id . \"\\n\";\n    } catch (PDOException $e) {\n        echo $e->getMessage().\"\\n\";\n    }\n}\ntestLastInsertId($db);\nunset($db);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
