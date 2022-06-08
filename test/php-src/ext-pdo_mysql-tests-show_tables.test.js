// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/show_tables.phpt
  it("PDO MySQL SHOW TABLES", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\nprint_r($db->query('SHOW TABLES'));\n?>")).toMatchSnapshot();
  });
});
