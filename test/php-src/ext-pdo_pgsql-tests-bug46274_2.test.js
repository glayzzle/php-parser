// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug46274_2.phpt
  it("Bug #46274 (pdo_pgsql - Segfault when using PDO::ATTR_STRINGIFY_FETCHES and blob)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);\ntry {\n        @$db->query(\"SET bytea_output = 'escape'\");\n} catch (Exception $e) {\n}\n$db->query('CREATE TABLE test_one_blob (id SERIAL NOT NULL, blob1 BYTEA)');\n$stmt = $db->prepare(\"INSERT INTO test_one_blob (blob1) VALUES (:foo)\");\n$data = 'foo';\n$blob = fopen('php://memory', 'a');\nfwrite($blob, $data);\nrewind($blob);\n$stmt->bindparam(':foo', $blob, PDO::PARAM_LOB);\n$stmt->execute();\n$blob = '';\n$stmt->bindparam(':foo', $blob, PDO::PARAM_LOB);\n$stmt->execute();\n$data = '';\n$blob = fopen('php://memory', 'a');\nfwrite($blob, $data);\nrewind($blob);\n$stmt->bindparam(':foo', $blob, PDO::PARAM_LOB);\n$stmt->execute();\n$blob = NULL;\n$stmt->bindparam(':foo', $blob, PDO::PARAM_LOB);\n$stmt->execute();\n$res = $db->query(\"SELECT blob1 from test_one_blob\");\n// Resource\nvar_dump($x = $res->fetch());\nvar_dump(fread($x['blob1'], 10));\n// Resource\nvar_dump($res->fetch());\nvar_dump(fread($x['blob1'], 10));\n// Resource\nvar_dump($res->fetch());\nvar_dump(fread($x['blob1'], 10));\n// NULL\nvar_dump($res->fetch());\n$db->query('DROP TABLE test_one_blob');\n?>")).toMatchSnapshot();
  });
});
