// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/datetime2.phpt
  it("PDO_DBLIB: DATETIME2 column data", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$sql = \"SELECT convert(datetime2, '10231017 10:22:44.1355318') AS [d]\";\nvar_dump($db->getAttribute(PDO::DBLIB_ATTR_DATETIME_CONVERT));\n$stmt = $db->query($sql);\nvar_dump($stmt->fetch(PDO::FETCH_ASSOC));\n$db->setAttribute(PDO::DBLIB_ATTR_DATETIME_CONVERT, 1);\nvar_dump($db->getAttribute(PDO::DBLIB_ATTR_DATETIME_CONVERT));\n$stmt = $db->query($sql);\nvar_dump($stmt->fetch(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
