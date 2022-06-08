// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_blob_bind_resource.phpt
  it("SQLite3::execute() with a resource bound for blob param", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\nrequire_once(__DIR__ . '/stream_test.inc');\nvar_dump($db->exec('CREATE TABLE test (id STRING, data BLOB)'));\n$insert_stmt = $db->prepare(\"INSERT INTO test (id, data) VALUES (1, ?)\");\nclass HelloWrapper {\n    public function stream_open() { return true; }\n    public function stream_eof() { return true; }\n    public function stream_read() { return NULL; }\n    public function stream_stat() { return array(); }\n}\nstream_wrapper_register(\"hello\", \"HelloWrapper\");\n$f = fopen(\"hello://there\", \"r\");\nvar_dump($insert_stmt->bindParam(1, $f, SQLITE3_BLOB));\nvar_dump($insert_stmt->execute());\nvar_dump($insert_stmt->close());\nfclose($f);\n?>\n+++DONE+++")).toMatchSnapshot();
  });
});
