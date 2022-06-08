// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug70862.phpt
  it("PDO_sqlite: Testing sqliteCreateCollation()", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->exec('CREATE TABLE test(field BLOB)');\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\nclass HelloWrapper {\n    public function stream_open() { return true; }\n    public function stream_eof() { return true; }\n    public function stream_read() { return NULL; }\n    public function stream_stat() { return array(); }\n}\nstream_wrapper_register(\"hello\", \"HelloWrapper\");\n$f = fopen(\"hello://there\", \"r\");\n$stmt = $db->prepare('INSERT INTO test(field) VALUES (:para)');\n$stmt->bindParam(\":para\", $f, PDO::PARAM_LOB);\n$stmt->execute();\nvar_dump($f);\n?>\n+++DONE+++")).toMatchSnapshot();
  });
});
