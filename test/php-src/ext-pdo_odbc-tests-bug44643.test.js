// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_odbc/tests/bug44643.phpt
  it("Bug #44643 (bound parameters ignore explicit type definitions)", function () {
    expect(parser.parseCode("<?php\nrequire 'ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(dirname(__FILE__) . '/common.phpt');\n$sql = \"SELECT * FROM (SELECT 'test' = :id1) a WHERE a.test = :id2\";\n$stmt = $db->prepare($sql);\n$id1 = 1;\n$stmt->bindParam(':id1', $id1, PDO::PARAM_INT);\n$id2 = 1;\n$stmt->bindParam(':id2', $id2, PDO::PARAM_INT);\nvar_dump($stmt->execute());\n?>")).toMatchSnapshot();
  });
});
