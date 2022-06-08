// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_38_backup.phpt
  it("SQLite3::backup test", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\necho \"Creating table\\n\";\n$db->exec('CREATE TABLE test (a, b);');\n$db->exec('INSERT INTO test VALUES (42, \\'php\\');');\necho \"Checking if table has been created\\n\";\nvar_dump($db->querySingle('SELECT COUNT(*) FROM sqlite_master;'));\n$db2 = new SQLite3(':memory:');\necho \"Backup to DB2\\n\";\nvar_dump($db->backup($db2));\necho \"Checking if table has been copied\\n\";\nvar_dump($db2->querySingle('SELECT COUNT(*) FROM sqlite_master;'));\necho \"Checking backup contents\\n\";\nvar_dump($db2->querySingle('SELECT a FROM test;'));\nvar_dump($db2->querySingle('SELECT b FROM test;'));\necho \"Resetting DB2\\n\";\n$db2->close();\n$db2 = new SQLite3(':memory:');\necho \"Locking DB1\\n\";\nvar_dump($db->exec('BEGIN EXCLUSIVE;'));\necho \"Backup to DB2 (should fail)\\n\";\nvar_dump($db->backup($db2));\n?>")).toMatchSnapshot();
  });
});
