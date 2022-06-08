// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug45798.phpt
  it("Bug #45798 (sqlite3 doesn't notice if variable was bound)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\n$db->exec('CREATE TABLE test (time INTEGER, id STRING)');\n$db->exec(\"INSERT INTO test (time, id) VALUES (\" . time() . \", 'a')\");\n$db->exec(\"INSERT INTO test (time, id) VALUES (\" . time() . \", 'b')\");\n$stmt = $db->prepare(\"SELECT * FROM test WHERE id = ? ORDER BY id ASC\");\n$stmt->bindParam(1, $foo, SQLITE3_TEXT);\n$results = $stmt->execute();\nwhile ($result = $results->fetchArray(SQLITE3_NUM)) {\n    var_dump($result);\n}\n$results->finalize();\n$db->close();\nprint \"done\";\n?>")).toMatchSnapshot();
  });
});
