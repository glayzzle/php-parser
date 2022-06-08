// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug64953.phpt
  it("PDO PgSQL Bug #64953 (Postgres prepared statement positional parameter casting)", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$pdo = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$pdo->setAttribute (\\PDO::ATTR_ERRMODE, \\PDO::ERRMODE_EXCEPTION);\necho \"Taken from the bug report:\\n\";\n$st = $pdo->prepare('SELECT ?::char as i');\n$st->bindValue(1, '1');\n$st->execute();\nvar_dump($st->fetch()); // return false\n$st = $pdo->prepare('SELECT (?)::char as i');\n$st->bindValue(1, '1');\n$st->execute();\nvar_dump($st->fetch());  // return array(1) { [\"i\"]=> string(1) \"1\" }\necho \"Something more nasty:\\n\";\n$st = $pdo->prepare(\"SELECT :int::int as i\");\n$st->execute(array(\":int\" => 123));\nvar_dump($st->fetch());\n$st = $pdo->prepare(\"SELECT '''?'''::text as \\\":text\\\"\");\n$st->execute();\nvar_dump($st->fetch());\n?>\nDone")).toMatchSnapshot();
  });
});
