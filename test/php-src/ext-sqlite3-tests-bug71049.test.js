// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug71049.phpt
  it("Bug #71049 (SQLite3Stmt::execute() releases bound parameter instead of internal buffer)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/new_db.inc');\n$db->exec('CREATE TABLE test (age INTEGER, id STRING)');\n$stmt = $db->prepare(\"SELECT * FROM test WHERE id = ? ORDER BY id ASC\");\n$foo = \"alive\" . chr(33);\n$stmt->bindParam(1, $foo, SQLITE3_BLOB);\n$results = $stmt->execute();\nvar_dump($foo);\n$db->close();\n?>")).toMatchSnapshot();
  });
});
