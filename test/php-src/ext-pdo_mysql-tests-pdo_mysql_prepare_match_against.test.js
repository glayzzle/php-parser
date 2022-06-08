// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_prepare_match_against.phpt
  it("Bug #41876 (bindParam() and bindValue() do not work with MySQL MATCH () AGAINST ())", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    try {\n        $db->exec('DROP TABLE IF EXISTS test');\n        $db->exec('CREATE TABLE test(id INT, label CHAR(255)) ENGINE=MyISAM');\n        $db->exec('CREATE FULLTEXT INDEX idx1 ON test(label)');\n        $stmt = $db->prepare('SELECT id, label FROM test WHERE MATCH label AGAINST (:placeholder)');\n        $stmt->execute(array(':placeholder' => 'row'));\n        var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n        $stmt = $db->prepare('SELECT id, label FROM test WHERE MATCH label AGAINST (:placeholder)');\n        $stmt->execute(array('placeholder' => 'row'));\n        var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n        $stmt = $db->prepare('SELECT id, label FROM test WHERE MATCH label AGAINST (?)');\n        $stmt->execute(array('row'));\n        var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    } catch (PDOException $e) {\n        printf(\"[001] %s, [%s} %s\\n\",\n            $e->getMessage(), $db->errorCode(), implode(' ', $db->errorInfo()));\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
