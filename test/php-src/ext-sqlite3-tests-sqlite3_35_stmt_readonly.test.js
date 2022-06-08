// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_35_stmt_readonly.phpt
  it("SQLite3_stmt::readOnly check", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (time INTEGER, id STRING)'));\necho \"INSERT into table\\n\";\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'a')\"));\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'b')\"));\necho \"Checking select statement\\n\";\n$stmt = $db->prepare(\"SELECT * FROM test WHERE id = ? ORDER BY id ASC\");\nvar_dump($stmt->readOnly());\necho \"Checking update statement\\n\";\n$stmt = $db->prepare(\"UPDATE test SET id = 'c' WHERE id = ?\");\nvar_dump($stmt->readOnly());\necho \"Checking delete statement\\n\";\n$stmt = $db->prepare(\"DELETE FROM test\");\nvar_dump($stmt->readOnly());\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
