// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_37445.phpt
  it("PDO MySQL Bug #37445 (Premature stmt object destruction)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO :: ATTR_EMULATE_PREPARES, true);\n$stmt = $db->prepare(\"SELECT 1\");\n$stmt->bindParam(':a', 'b');\n?>")).toMatchSnapshot();
  });
});
