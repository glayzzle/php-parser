// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug69344.phpt
  it("PDO PgSQL Bug #69344 (PDO PgSQL Incorrect binding numeric array with gaps)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$pdo = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$pdo->setAttribute (\\PDO::ATTR_ERRMODE, \\PDO::ERRMODE_EXCEPTION);\n$pdo->setAttribute (\\PDO::ATTR_DEFAULT_FETCH_MODE, \\PDO::FETCH_ASSOC);\n$test = function () use ($pdo) {\n    $arr = [\n        0 => \"a\",\n        2 => \"b\",\n    ];\n    $stmt = $pdo->prepare(\"SELECT (?)::text AS a, (?)::text AS b\");\n    try {\n        $stmt->execute($arr);\n        var_dump($stmt->fetch());\n    } catch (\\Exception $e) {\n        echo $e->getMessage().\"\\n\";\n    }\n};\n$test();\n$pdo->setAttribute(\\PDO::ATTR_EMULATE_PREPARES, true);\n$test();\n?>")).toMatchSnapshot();
  });
});
