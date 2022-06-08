// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_51670.phpt
  it("Bug #51670 (getColumnMeta causes segfault when re-executing query after calling nextRowset)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$query = $db->prepare('SELECT 1 AS num');\n$query->execute();\nif(!is_array($query->getColumnMeta(0))) die('FAIL!');\n$query->nextRowset();\n$query->execute();\nif(!is_array($query->getColumnMeta(0))) die('FAIL!');\necho 'done!';\n?>")).toMatchSnapshot();
  });
});
