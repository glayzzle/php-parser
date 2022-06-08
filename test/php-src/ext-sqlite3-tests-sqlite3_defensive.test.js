// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_defensive.phpt
  it("SQLite3 defensive mode ini setting", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\nvar_dump($db->exec('CREATE TABLE test (a, b);'));\n// This does not generate an error!\nvar_dump($db->exec('PRAGMA writable_schema = ON;'));\nvar_dump($db->querySingle('PRAGMA writable_schema;'));\n// Should be 1\nvar_dump($db->querySingle('SELECT COUNT(*) FROM sqlite_master;'));\n// Should generate an error!\nvar_dump($db->querySingle('DELETE FROM sqlite_master;'));\n// Should still be 1\nvar_dump($db->querySingle('SELECT COUNT(*) FROM sqlite_master;'));\n?>")).toMatchSnapshot();
  });
});
