// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/bug_73396.phpt
  it("PDO_DBLIB: bigint columns are returned as strings", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n// on 64-bit machines, these columns should come back as ints\n// on 32-bit machines, they will come back as strings because zend_long isn't big enough\n$expected = PHP_INT_SIZE == 8 ? 1 : '1';\n$stmt = $db->query('SELECT CAST(1 AS bigint)');\nvar_dump($stmt->fetchColumn() === $expected);\n?>")).toMatchSnapshot();
  });
});
