// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/bug_71667.phpt
  it("PDO_DBLIB: Emulate how mssql extension names \"computed\" columns", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$stmt = $db->prepare(\"SELECT 1, 2 AS named, 3\");\n$stmt->execute();\nvar_dump($stmt->fetchAll());\n?>")).toMatchSnapshot();
  });
});
