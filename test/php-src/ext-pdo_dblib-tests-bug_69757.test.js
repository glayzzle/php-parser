// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/bug_69757.phpt
  it("PDO_DBLIB: Segmentation fault on pdo_dblib::nextRowset", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$sql = \"\n    exec dbo.sp_executesql N'\n        SELECT TOP 1 * FROM sysobjects\n        SELECT TOP 1 * FROM syscolumns\n    '\n\";\n$stmt = $db->query($sql);\n$resultset1 = $stmt->fetchAll(PDO::FETCH_ASSOC);\nif (true !== $stmt->nextRowset()) {\n    die('expect TRUE on nextRowset');\n}\n$resultset2 = $stmt->fetchAll(PDO::FETCH_ASSOC);\nif (false !== $stmt->nextRowset()) {\n    die('expect FALSE on nextRowset');\n}\n$stmt->closeCursor();\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
