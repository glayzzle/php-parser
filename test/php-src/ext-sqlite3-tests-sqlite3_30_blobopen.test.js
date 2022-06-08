// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_30_blobopen.phpt
  it("SQLite3::blobOpen stream test", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\nrequire_once(__DIR__ . '/stream_test.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (id STRING, data BLOB)'));\necho \"PREPARING insert\\n\";\n$insert_stmt = $db->prepare(\"INSERT INTO test (id, data) VALUES (?, ?)\");\necho \"BINDING Parameter\\n\";\nvar_dump($insert_stmt->bindValue(1, 'a', SQLITE3_TEXT));\nvar_dump($insert_stmt->bindValue(2, 'TEST TEST', SQLITE3_BLOB));\n$insert_stmt->execute();\necho \"Closing statement\\n\";\nvar_dump($insert_stmt->close());\n$stream = $db->openBlob('test', 'data', 1);\nvar_dump($stream);\necho \"Stream Contents\\n\";\nvar_dump(stream_get_contents($stream));\necho \"Writing to read-only stream\\n\";\nvar_dump(fwrite($stream, 'ABCD'));\necho \"Closing Stream\\n\";\nvar_dump(fclose($stream));\necho \"Opening stream in write mode\\n\";\n$stream = $db->openBlob('test', 'data', 1, 'main', SQLITE3_OPEN_READWRITE);\nvar_dump($stream);\necho \"Writing to blob\\n\";\nvar_dump(fwrite($stream, 'ABCD'));\necho \"Stream Contents\\n\";\nfseek($stream, 0);\nvar_dump(stream_get_contents($stream));\necho \"Expanding blob size\\n\";\nvar_dump(fwrite($stream, 'ABCD ABCD ABCD'));\necho \"Closing Stream\\n\";\nvar_dump(fclose($stream));\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
