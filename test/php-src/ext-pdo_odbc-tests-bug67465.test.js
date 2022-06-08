// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_odbc/tests/bug67465.phpt
  it("Bug #67465 (NULL Pointer dereference in odbc_handle_preparer)", function () {
    expect(parser.parseCode("<?php\nrequire 'ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(dirname(__FILE__) . '/common.phpt');\n$db->prepare(\"SELECT 1\", [PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL]);\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
