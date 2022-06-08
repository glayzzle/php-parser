// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug66043.phpt
  it("Bug #66043 (Segfault calling bind_param() on mysqli)", function () {
    expect(parser.parseCode("<?php\nrequire 'connect.inc';\nif (!$db = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n    printf(\"[001] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n}\nif (!$db->query(\"DROP TABLE IF EXISTS test\")) {\n    printf(\"[002] [%d] %s\\n\", mysqli_errno($db), mysqli_error($db));\n    die();\n}\nif (!$db->query(\"CREATE TABLE test(str TEXT)\")) {\n    printf(\"[003] [%d] %s\\n\", mysqli_errno($db), mysqli_error($db));\n    die();\n}\nif (!$db->query(\"INSERT INTO test(str) VALUES ('Test')\")) {\n    printf(\"[004] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    die();\n}\n$stmt = $db->stmt_init();\nif (!$stmt->prepare(\"SELECT str FROM test\")) {\n    printf(\"[004] [%d] %s\\n\", mysqli_errno($db), mysqli_error($db));\n    die();\n}\n$stmt->execute();\n$stmt->bind_result($testArg);\necho \"Okey\";\n?>")).toMatchSnapshot();
  });
});
