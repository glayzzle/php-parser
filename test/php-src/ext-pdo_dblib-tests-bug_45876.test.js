// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/bug_45876.phpt
  it("PDO_DBLIB: Does not support get column meta", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$stmt = $db->prepare(\"select top 1 ic1.* from information_schema.columns ic1\");\n$stmt->execute();\nvar_dump($stmt->getColumnMeta(0));\n$stmt = null;\n?>")).toMatchSnapshot();
  });
});
