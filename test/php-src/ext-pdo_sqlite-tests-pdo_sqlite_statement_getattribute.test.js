// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_statement_getattribute.phpt
  it("PDO_sqlite: Testing PDOStatement::getAttribute()", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$st = $db->prepare('SELECT 1;');\nvar_dump($st->getAttribute(PDO::SQLITE_ATTR_READONLY_STATEMENT));\n$st = $db->prepare('CREATE TABLE test (a TEXT);');\nvar_dump($st->getAttribute(PDO::SQLITE_ATTR_READONLY_STATEMENT));\n?>")).toMatchSnapshot();
  });
});
