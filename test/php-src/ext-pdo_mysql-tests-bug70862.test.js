// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug70862.phpt
  it("MySQL Prepared Statements and BLOBs", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    $db->exec('DROP TABLE IF EXISTS test');\n    $db->exec(sprintf('CREATE TABLE test(id INT, label BLOB)'));\n    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\n    $db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\n    class HelloWrapper {\n        public function stream_open() { return true; }\n        public function stream_eof() { return true; }\n        public function stream_read() { return NULL; }\n        public function stream_stat() { return array(); }\n    }\n    stream_wrapper_register(\"hello\", \"HelloWrapper\");\n    $f = fopen(\"hello://there\", \"r\");\n    $stmt = $db->prepare('INSERT INTO test(id, label) VALUES (1, :para)');\n    $stmt->bindParam(\":para\", $f, PDO::PARAM_LOB);\n    $stmt->execute();\n    var_dump($f);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
