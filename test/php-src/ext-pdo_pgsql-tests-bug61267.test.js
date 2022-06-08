// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug61267.phpt
  it("PDO::exec() returns 0 when the statement is a SELECT.", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\nrequire_once __DIR__ . '/config.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$res = $db->exec('SELECT * from generate_series(1, 42);');\nvar_dump($res);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
