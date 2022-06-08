// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/bug_69592.phpt
  it("PDO_DBLIB: PDO::DBLIB_ATTR_SKIP_EMPTY_ROWSETS for skip junk resultsets on SET NOCOUNT expression", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$sql = '\n    SET NOCOUNT ON\n    SELECT 0 AS [result]\n';\nvar_dump($db->getAttribute(PDO::DBLIB_ATTR_SKIP_EMPTY_ROWSETS));\n$stmt = $db->query($sql);\nvar_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\nvar_dump($stmt->nextRowset());\nvar_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n$stmt->closeCursor();\n$db->setAttribute(PDO::DBLIB_ATTR_SKIP_EMPTY_ROWSETS, true);\nvar_dump($db->getAttribute(PDO::DBLIB_ATTR_SKIP_EMPTY_ROWSETS));\n$stmt = $db->query($sql);\nvar_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\nvar_dump($stmt->nextRowset());\nvar_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n$stmt->closeCursor();\nvar_dump($db->getAttribute(PDO::DBLIB_ATTR_SKIP_EMPTY_ROWSETS));\n?>")).toMatchSnapshot();
  });
});
