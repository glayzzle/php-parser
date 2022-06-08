// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_39483.phpt
  it("PDO MySQL Bug #39483 (Problem with handling of \\ char in prepared statements)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, TRUE);\n$stmt = $db->prepare('SELECT UPPER(\\'\\0:D\\0\\'),?');\n$stmt->execute(array(1));\nvar_dump($stmt->fetchAll(PDO::FETCH_NUM));\n?>")).toMatchSnapshot();
  });
});
