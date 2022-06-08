// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/bug_67130.phpt
  it("PDO_DBLIB: \\PDOStatement::nextRowset() should succeed when all rows in current rowset haven't been fetched", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$stmt = $db->query('SELECT 1; SELECT 2; SELECT 3;');\nvar_dump($stmt->fetch());\nvar_dump($stmt->fetch());\nvar_dump($stmt->nextRowset());\nvar_dump($stmt->nextRowset());\nvar_dump($stmt->fetch());\nvar_dump($stmt->nextRowset());\n?>")).toMatchSnapshot();
  });
});
