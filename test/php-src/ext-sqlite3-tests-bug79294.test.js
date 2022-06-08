// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug79294.phpt
  it("Bug #79294 ()::columnType() may fail after SQLite3Stmt::reset())", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\n$db->exec(\"CREATE TABLE foo (bar INT)\");\n$db->exec(\"INSERT INTO foo VALUES (1)\");\n$stmt = $db->prepare(\"SELECT * FROM foo\");\n$res = $stmt->execute();\nvar_dump($res->fetchArray() !== false);\nvar_dump($res->columnType(0));\nvar_dump($res->fetchArray() !== false);\nvar_dump($res->columnType(0));\n$stmt->reset();\nvar_dump($res->fetchArray() !== false);\nvar_dump($res->columnType(0));\n$res->reset();\nvar_dump($res->fetchArray() !== false);\nvar_dump($res->columnType(0));\n?>")).toMatchSnapshot();
  });
});
