// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug69899.phpt
  it("Bug #69899: Segfault on stmt close after free_result with mysqlnd.", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/connect.inc';\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$mysqli = new mysqli($host, $user, $passwd, $db, $port, $socket);\n$stmt   = $mysqli->prepare('SELECT 1');\nvar_dump(\n    $mysqli->close(),\n    $stmt->free_result(),\n    $stmt->close()\n);\n?>")).toMatchSnapshot();
  });
});
