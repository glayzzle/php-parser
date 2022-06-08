// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/gh7723.phpt
  it("GitHub #7723 (Fix error message allocation of PDO PgSQL)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\nrequire __DIR__ . '/config.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_PERSISTENT, true);\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\n$st = $db->prepare('select 1');\nfor ($i = 0; ++$i <= 2;) {\n    try {\n        $st->bindValue(':invalid', $i);\n    } catch (PDOException $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
