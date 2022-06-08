// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_27_reset_prepared_stmt_result.phpt
  it("SQLite3::reset prepared statement results", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (time INTEGER, id STRING)'));\necho \"INSERT into table\\n\";\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'a')\"));\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'b')\"));\necho \"SELECTING results\\n\";\n$stmt = $db->prepare(\"SELECT * FROM test WHERE id = ? ORDER BY id ASC\");\n$foo = 'c';\necho \"BINDING Parameter\\n\";\nvar_dump($stmt->bindParam(1, $foo, SQLITE3_TEXT));\n$foo = 'a';\n$results = $stmt->execute();\nwhile ($result = $results->fetchArray(SQLITE3_NUM)) {\n    var_dump($result);\n}\n$results->reset();\nwhile ($result = $results->fetchArray(SQLITE3_NUM)) {\n    var_dump($result);\n}\n$results->finalize();\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
