// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug77935.phpt
  it("Bug #77935: Crash in mysqlnd_fetch_stmt_row_cursor when calling an SP with a cursor", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/connect.inc');\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$db = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$db->query('DROP PROCEDURE IF EXISTS testSp');\n$db->query(<<<'SQL'\nCREATE\n    PROCEDURE `testSp`()\n\tBEGIN\n\t\tDECLARE `cur` CURSOR FOR SELECT 1;\n\t\tOPEN `cur`;\n\t\tCLOSE `cur`;\n\t\tSELECT 1;\n\tEND;\nSQL);\n$stmt = $db->prepare(\"CALL testSp()\");\n$stmt->execute();\n$result = $stmt->get_result();\nwhile ($row = $result->fetch_assoc()) {\n    var_dump($row);\n}\n?>")).toMatchSnapshot();
  });
});
