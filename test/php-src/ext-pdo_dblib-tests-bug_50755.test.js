// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/bug_50755.phpt
  it("PDO_DBLIB: Out of memory on large recordsets", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n/* This should be sufficient to overflow any buffers */\n$stmt = $db->prepare(\"select *\nfrom information_schema.columns ic1\ncross join information_schema.columns ic2\ncross join information_schema.columns ic3\");\n$x = $stmt->execute();\n$n = 0;\nwhile (($r = $stmt->fetch())) {\n    $n++;\n}\n$stmt = null;\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
