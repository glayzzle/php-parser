// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_07_prepared_stmt.phpt
  it("SQLite3::prepare Bound Value test", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (time INTEGER, id STRING)'));\necho \"INSERT into table\\n\";\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'a')\"));\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'b')\"));\necho \"SELECTING results\\n\";\n$stmt = $db->prepare(\"SELECT * FROM test WHERE id = ? ORDER BY id ASC\");\n$foo = 'a';\necho \"BINDING Value\\n\";\nvar_dump($stmt->bindValue(1, $foo, SQLITE3_TEXT));\n$results = $stmt->execute();\nwhile ($result = $results->fetchArray(SQLITE3_NUM))\n{\n    var_dump($result);\n}\n$results->finalize();\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
