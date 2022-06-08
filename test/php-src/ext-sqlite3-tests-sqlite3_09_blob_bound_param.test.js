// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_09_blob_bound_param.phpt
  it("SQLite3::prepare Bound Variable Blob test", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\nrequire_once(__DIR__ . '/stream_test.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (id STRING, data BLOB)'));\necho \"PREPARING insert\\n\";\n$insert_stmt = $db->prepare(\"INSERT INTO test (id, data) VALUES (?, ?)\");\necho \"Opening blob stream\\n\";\n$foo = fopen('sqliteBlobTest://fooo', 'r');\nvar_dump($foo);\necho \"BINDING Parameter\\n\";\nvar_dump($insert_stmt->bindValue(1, 'a', SQLITE3_TEXT));\nvar_dump($insert_stmt->bindParam(2, $foo, SQLITE3_BLOB));\n$insert_stmt->execute();\necho \"Closing statement\\n\";\nvar_dump($insert_stmt->close());\necho \"SELECTING results\\n\";\n$results = $db->query(\"SELECT id, quote(data) AS data FROM test ORDER BY id ASC\");\nwhile ($result = $results->fetchArray(SQLITE3_NUM))\n{\n    var_dump($result);\n}\n$results->finalize();\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
