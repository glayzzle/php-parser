// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/last_insert_id.phpt
  it("PDO MySQL auto_increment / last insert id", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\nprint_r($db->query(\"CREATE TABLE test (id int auto_increment primary key, num int)\"));\nprint_r($db->query(\"INSERT INTO test (id, num) VALUES (23, 42)\"));\nprint_r($db->query(\"INSERT INTO test (num) VALUES (451)\"));\nprint_r($db->lastInsertId());\n?>")).toMatchSnapshot();
  });
});
