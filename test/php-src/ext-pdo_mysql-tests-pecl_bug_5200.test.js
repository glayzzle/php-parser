// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pecl_bug_5200.phpt
  it("PDO MySQL PECL Bug #5200 (Describe table gives unexpected result mysql and type enum)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__. '/common.phpt');\n$db->exec(\"CREATE TABLE test (bar INT NOT NULL, phase enum('please_select', 'I', 'II', 'IIa', 'IIb', 'III', 'IV'))\");\nforeach ($db->query('DESCRIBE test phase')->fetchAll(PDO::FETCH_ASSOC) as $row) {\n    print_r($row);\n}\n?>")).toMatchSnapshot();
  });
});
