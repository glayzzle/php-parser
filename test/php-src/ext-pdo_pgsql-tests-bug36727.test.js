// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug36727.phpt
  it("Bug #36727 (segfault in bindValue() when no parameters are defined)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\nrequire __DIR__ . '/config.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$stmt = $db->prepare('SELECT * FROM child');\nvar_dump($stmt->bindValue(':test', 1, PDO::PARAM_INT));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
