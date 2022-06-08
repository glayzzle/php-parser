// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug81343.phpt
  it("Bug #81343 pdo_pgsql: Inconsitent boolean conversion after calling closeCursor()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$pdo = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$pdo->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);\n$sth = $pdo->prepare(\"select false where 2=?\");\nfor ($i = 0; $i < 2; $i++) {\n    $sth->execute([2]);\n    var_dump($sth->fetchColumn(0));\n    $sth->closeCursor();\n}\n?>")).toMatchSnapshot();
  });
});
