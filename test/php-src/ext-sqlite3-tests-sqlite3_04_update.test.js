// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_04_update.phpt
  it("SQLite3::query UPDATE tests", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (time INTEGER, id STRING)'));\necho \"INSERT into table\\n\";\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'a')\"));\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'b')\"));\necho \"SELECTING results\\n\";\n$results = $db->query(\"SELECT * FROM test ORDER BY id ASC\");\nwhile ($result = $results->fetchArray(SQLITE3_NUM))\n{\n    var_dump($result);\n}\n$results->finalize();\necho \"UPDATING results\\n\";\nvar_dump($db->exec(\"UPDATE test SET id = 'c' WHERE id = 'a'\"));\necho \"Checking results\\n\";\n$results = $db->query(\"SELECT * FROM test ORDER BY id ASC\");\nwhile ($result = $results->fetchArray(SQLITE3_NUM))\n{\n    var_dump($result);\n}\n$results->finalize();\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
