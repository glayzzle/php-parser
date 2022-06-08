// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug52487.phpt
  it("Bug #52487 (PDO::FETCH_INTO leaks memory)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$stmt = $db->prepare(\"select 1 as attr\");\nfor ($i = 0; $i < 10; $i++) {\n    $stmt->setFetchMode(PDO::FETCH_INTO, new stdClass);\n}\nprint \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
