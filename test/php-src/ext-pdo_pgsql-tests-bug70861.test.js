// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug70861.phpt
  it("Bug #70861 Segmentation fault in pdo_parse_params() during Drupal 8 test suite", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\ntry {\n    @$db->query(\"SET bytea_output = 'escape'\");\n} catch (Exception $e) {\n}\n$db->query('DROP TABLE IF EXISTS test_blob_crash CASCADE');\n$db->query('CREATE TABLE test_blob_crash (id SERIAL NOT NULL, blob1 BYTEA)');\nclass HelloWrapper {\n    public function stream_open() { return true; }\n    public function stream_eof() { return true; }\n    public function stream_read() { return NULL; }\n    public function stream_stat() { return array(); }\n}\nstream_wrapper_register(\"hello\", \"HelloWrapper\");\n$f = fopen(\"hello://there\", \"r\");\n$stmt = $db->prepare(\"INSERT INTO test_one_blob (blob1) VALUES (:foo)\", array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));\n$stmt->bindparam(':foo', $f, PDO::PARAM_LOB);\n$stmt->execute();\nfclose($f);\n?>\n+++DONE+++")).toMatchSnapshot();
  });
});
