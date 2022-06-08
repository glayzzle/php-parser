// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/bug46274_2.phpt
  it("Bug #46274 (pdo_pgsql - Segfault when using PDO::ATTR_STRINGIFY_FETCHES and blob)", function () {
    expect(parser.parseCode("<?php\nrequire 'ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory('ext/pdo_oci/tests/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);\ntry {\n    $db->exec(\"DROP TABLE test_one_blob\");\n} catch (Exception $e) {\n}\n$db->beginTransaction();\n$db->query('CREATE TABLE test_one_blob (id INT NOT NULL, blob1 BLOB)');\n$stmt = $db->prepare(\"INSERT INTO test_one_blob (id, blob1) VALUES (:id, EMPTY_BLOB()) RETURNING blob1 INTO :foo\");\n$data = 'foo';\n$blob = fopen('php://memory', 'a');\nfwrite($blob, $data);\nrewind($blob);\n$id = 1;\n$stmt->bindparam(':id', $id);\n$stmt->bindparam(':foo', $blob, PDO::PARAM_LOB);\n$stmt->execute();\n$data = '';\n$blob = fopen('php://memory', 'a');\nfwrite($blob, $data);\nrewind($blob);\n$id = 1;\n$stmt->bindparam(':id', $id);\n$stmt->bindparam(':foo', $blob, PDO::PARAM_LOB);\n$stmt->execute();\n$res = $db->query(\"SELECT blob1 from test_one_blob\");\n// Resource\nvar_dump($row = $res->fetch());\nvar_dump(fread($row[0], 1024));\nfclose($row[0]);\n// Empty string\nvar_dump($row = $res->fetch());\nvar_dump(fread($row[0], 1024));\nfclose($row[0]);\n$db->exec(\"DROP TABLE test_one_blob\");\n?>")).toMatchSnapshot();
  });
});
