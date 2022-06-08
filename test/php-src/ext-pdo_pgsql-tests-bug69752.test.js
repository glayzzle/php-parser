// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug69752.phpt
  it("PDO PgSQL Bug #69752 (memory leak with closeCursor)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$pdo = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$pdo->setAttribute(\\PDO::ATTR_ERRMODE, \\PDO::ERRMODE_EXCEPTION);\n$pdo->beginTransaction();\n$pdo->exec(\"\n    create table foo (\n        id bigserial not null primary key,\n        field1 text not null,\n        field2 text not null,\n        field3 text not null,\n        field4 int4 not null\n    )\n\");\n$stmt = $pdo->prepare(\"insert into foo (field1, field2, field3, field4) values (:field1, :field2, :field3, :field4)\");\n$max = 1000;\n$first_time_usage = null;\nfor($i = 0; $i < $max; $i++) {\n    $data = array(\n        'field1' => \"field1: $i\",\n        'field2' => \"field2: $i\",\n        'field3' => \"field3: $i\",\n        'field4' => $i\n    );\n    $stmt->execute($data);\n    $stmt->closeCursor();\n    $usage = intval(floor(memory_get_usage() / 1024));\n    if ($first_time_usage === null) $first_time_usage = $usage;\n    /* Use delta instead of direct comparison here */\n    if (abs($first_time_usage - $usage) > 3){\n        printf(\"Memory Leak Detected: %d != %d\\n\", $usage, $first_time_usage);\n        break;\n    }\n}\n$pdo->rollBack();\necho \"done\\n\"\n?>")).toMatchSnapshot();
  });
});
