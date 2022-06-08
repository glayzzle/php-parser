// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug46139.phpt
  it("Bug #46139 (PDOStatement->setFetchMode() forgets FETCH_PROPS_LATE)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\nclass Person {\n    public $test = NULL;\n    public function __construct() {\n        var_dump($this->test);\n    }\n}\n$stmt = $db->query(\"SELECT 'foo' test, 1\");\n$stmt->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, 'Person');\n$r1 = $stmt->fetch();\nprintf(\"'%s'\\n\", $r1->test);\n$stmt = $db->query(\"SELECT 'foo' test, 1\");\n$stmt->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, 'Person');\n$r1 = $stmt->fetchAll();\nprintf(\"'%s'\\n\", $r1[0]->test);\n$stmt = $db->query(\"SELECT 'foo' test, 1\");\n$stmt->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, 'Person');\n$r1 = $stmt->fetch(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE);\nprintf(\"'%s'\\n\", $r1->test);\n?>")).toMatchSnapshot();
  });
});
