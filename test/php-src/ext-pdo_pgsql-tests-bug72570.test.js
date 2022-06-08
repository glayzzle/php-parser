// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug72570.phpt
  it("PDO PgSQL Bug #72570 (Segmentation fault when binding parameters on a query without placeholders)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\n$stmt = $db->prepare(\"SELECT 1\");\ntry {\n    var_dump($stmt->execute([1]));\n} catch (PDOException $e) {\n    var_dump($e->getCode());\n}\n?>")).toMatchSnapshot();
  });
});
