// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_bind_bug68849.phpt
  it("Bug #68849 bindValue is not using the right data type", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\n$db->exec(\"CREATE TABLE test (a INTEGER, b TEXT, c REAL);\" .\n        \"INSERT INTO test VALUES (1, 'hello', 3.14);\" .\n        \"INSERT INTO test VALUES (3, 'world', 3.15);\" .\n        \"INSERT INTO test VALUES (0, '42', 0.42);\"\n);\n$s = $db->prepare('SELECT * FROM test WHERE (a+2) = ?;');\n$s->bindValue(1, 3);\n$r = $s->execute();\nvar_dump($r->fetchArray(SQLITE3_ASSOC));\n$s = $db->prepare('SELECT * FROM test WHERE a = ?;');\n$s->bindValue(1, true);\n$r = $s->execute();\nvar_dump($r->fetchArray(SQLITE3_ASSOC));\n$s = $db->prepare('SELECT * FROM test WHERE a = ?;');\n$s->bindValue(1, false);\n$r = $s->execute();\nvar_dump($r->fetchArray(SQLITE3_ASSOC));\n$s = $db->prepare('SELECT * FROM test WHERE c = ?;');\n$s->bindValue(1, 3.15);\n$r = $s->execute();\nvar_dump($r->fetchArray(SQLITE3_ASSOC));\n?>")).toMatchSnapshot();
  });
});
