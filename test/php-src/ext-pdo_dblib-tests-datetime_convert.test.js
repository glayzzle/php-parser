// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/datetime_convert.phpt
  it("PDO_DBLIB: PDO::DBLIB_ATTR_DATETIME_CONVERT", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$sql = \"SELECT convert(datetime, '20171027 10:22:44.135') AS [d]\";\nvar_dump($db->getAttribute(PDO::DBLIB_ATTR_DATETIME_CONVERT));\n$stmt = $db->query($sql);\nvar_dump($stmt->fetch(PDO::FETCH_ASSOC));\n// assume default date format: %b %e %Y %I:%M:%S:%z%p\n$db->setAttribute(PDO::DBLIB_ATTR_DATETIME_CONVERT, 1);\nvar_dump($db->getAttribute(PDO::DBLIB_ATTR_DATETIME_CONVERT));\n$stmt = $db->query($sql);\nvar_dump($stmt->fetch(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
