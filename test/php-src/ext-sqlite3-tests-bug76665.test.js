// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug76665.phpt
  it("Bug #76665 (SQLite3Stmt::bindValue() with SQLITE3_FLOAT doesn't juggle)", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\n$db->exec(\"CREATE TABLE foo (bar REAL)\");\n$stmt = $db->prepare(\"INSERT INTO foo VALUES (:bar)\");\n$stmt->bindValue(':bar', 17, SQLITE3_FLOAT);\n$stmt->execute();\nvar_dump($db->querySingle(\"SELECT bar FROM foo LIMIT 1\"));\n?>")).toMatchSnapshot();
  });
});
