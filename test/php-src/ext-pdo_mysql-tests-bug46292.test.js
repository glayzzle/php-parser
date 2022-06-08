// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug46292.phpt
  it("Bug #46292 (PDO::setFetchMode() shouldn't requires the 2nd arg when using FETCH_CLASSTYPE)", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $pdoDb = MySQLPDOTest::factory();\n    class myclass {\n        public function __construct() {\n            printf(\"%s()\\n\", __METHOD__);\n        }\n    }\n    class myclass2 extends myclass { }\n    $pdoDb->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\n    $pdoDb->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\n    $pdoDb->query('DROP TABLE IF EXISTS testz');\n    $pdoDb->query('CREATE TABLE testz (name VARCHAR(20) NOT NULL, value INT)');\n    $pdoDb->query(\"INSERT INTO testz VALUES ('myclass', 1), ('myclass2', 2), ('myclass', NULL), ('myclass3', NULL)\");\n    $stmt = $pdoDb->prepare(\"SELECT * FROM testz\");\n    var_dump($stmt->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_CLASSTYPE | PDO::FETCH_GROUP));\n    $stmt->execute();\n    var_dump($stmt->fetch());\n    var_dump($stmt->fetch());\n    var_dump($stmt->fetchAll());\n?>")).toMatchSnapshot();
  });
});
