// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/bug_68957.phpt
  it("PDO_DBLIB bug #68957 PDO::query doesn't support several queries", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$query = \"declare @myInt int = 1; select @myInt;\";\n$stmt = $db->query($query);\n$stmt->nextRowset(); // Added line\n$rows = $stmt->fetchAll();\nprint_r($rows);\n?>")).toMatchSnapshot();
  });
});
