// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug70272.phpt
  it("Bug #70272 (Segfault in pdo_mysql)", function () {
    expect(parser.parseCode("<?php\n$a = new Stdclass();\n$a->a = &$a;\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$dummy = new StdClass();\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$dummy = NULL;\n$a->c = $db;\n$a->b = $db->prepare(\"select 1\");\n$a->d = $db->prepare(\"select 2\");\n$a->e = $db->prepare(\"select 3\");\n$a->f = $db->prepare(\"select 4\");\ngc_disable();\n?>\nokey")).toMatchSnapshot();
  });
});
