// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_11_numrows.phpt
  it("SQLite3::prepare number of rows", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (time INTEGER, id STRING)'));\necho \"INSERT into table\\n\";\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'a')\"));\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'b')\"));\necho \"SELECTING results\\n\";\n$results = $db->query(\"SELECT * FROM test ORDER BY id ASC\");\necho \"Number of rows\\n\";\nvar_dump($results->numRows());\n$results->finalize();\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
