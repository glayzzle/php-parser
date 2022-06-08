// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug71573.phpt
  it("Bug #71573 (Segfault (core dumped) if paramno beyond bound)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\nrequire_once __DIR__ . '/config.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$statement = $db->prepare('select ?');\n$statement->execute([ 'test', 'test', 'test' ]);\n?>")).toMatchSnapshot();
  });
});
