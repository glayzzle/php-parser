// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/ps_cursor_multiple_result_sets.phpt
  it("PS using cursor and returning multiple result sets", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/connect.inc');\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$db = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$db->query('DROP PROCEDURE IF EXISTS testPs');\n$db->query(<<<'SQL'\nCREATE PROCEDURE testPs() BEGIN\n    DECLARE testCursor CURSOR FOR SELECT 'stuff';\n    OPEN testCursor;\n    CLOSE testCursor;\n    SELECT 1 as a, 2 as b;\n    SELECT 3 as a, 4 as b;\nEND\nSQL\n);\necho \"use_result:\\n\";\n$stmt = $db->prepare(\"call testPs()\");\n$stmt->execute();\n$stmt->bind_result($v1, $v2);\nwhile ($stmt->fetch()) {\n    var_dump($v1, $v2);\n}\n$stmt->next_result();\n$stmt->bind_result($v1, $v2);\nwhile ($stmt->fetch()) {\n    var_dump($v1, $v2);\n}\n$stmt->next_result();\necho \"\\nstore_result:\\n\";\n$stmt = $db->prepare(\"call testPs()\");\n$stmt->execute();\n$stmt->store_result();\n$stmt->bind_result($v1, $v2);\nwhile ($stmt->fetch()) {\n    var_dump($v1, $v2);\n}\n$stmt->next_result();\n$stmt->store_result();\n$stmt->bind_result($v1, $v2);\nwhile ($stmt->fetch()) {\n    var_dump($v1, $v2);\n}\n$stmt->next_result();\necho \"\\nget_result:\\n\";\n$stmt = $db->prepare(\"call testPs()\");\n$stmt->execute();\n$result = $stmt->get_result();\nwhile ($row = $result->fetch_assoc()) {\n    var_dump($row);\n}\n$stmt->next_result();\n$result = $stmt->get_result();\nwhile ($row = $result->fetch_assoc()) {\n    var_dump($row);\n}\n$stmt->next_result();\n?>")).toMatchSnapshot();
  });
});
