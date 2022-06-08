// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_14_querysingle.phpt
  it("SQLite3::querySingle tests", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (time INTEGER, id STRING)'));\necho \"INSERT into table\\n\";\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'a')\"));\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'b')\"));\necho \"SELECTING results\\n\";\nvar_dump($db->querySingle(\"SELECT id FROM test WHERE id = 'a'\"));\nvar_dump($db->querySingle(\"SELECT id, time FROM test WHERE id = 'a'\", true));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
