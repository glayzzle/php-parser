// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug73959.phpt
  it("Bug #73959 (lastInsertId fails to throw an exception)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\nrequire __DIR__ . '/config.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_PERSISTENT, false);\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->setAttribute(PDO::PGSQL_ATTR_DISABLE_PREPARES, true);\ntry {\n    $db->lastInsertId('nonexistent_seq');\n    echo \"Error: No exception thrown\";\n} catch (PDOException $e) {\n    echo \"Success: Exception thrown\";\n}\n?>")).toMatchSnapshot();
  });
});
