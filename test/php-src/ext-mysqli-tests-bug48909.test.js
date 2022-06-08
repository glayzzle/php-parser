// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug48909.phpt
  it("Bug #48909 (Segmentation fault in mysqli_stmt_execute)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!($link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)))\n        printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    if (!$link->query(\"DROP TABLE IF EXISTS test\") ||\n        !$link->query(sprintf(\"CREATE TABLE test(id INT, label varchar(255)) ENGINE = %s\", $engine)))\n        printf(\"[002] [%d] %s\\n\", $link->errno, $link->error);\n    if (!$stmt = $link->prepare(\"INSERT INTO test(id, label) VALUES  (?, ?)\"))\n        printf(\"[003] [%d] %s\\n\", $link->errno, $link->error);\n    if (!$stmt->bind_param(\"bb\",$bvar, $bvar))\n        printf(\"[004] [%d] %s\\n\", $stmt->errno, $stmt->error);\n    if (!$stmt->execute()) {\n        if ($stmt->errno != 1366) {\n            /*\n                $bvar is null, b is for BLOB - any error like this should be OK:\n                1366 -  Incorrect integer value: '' for column 'id' at row 1\n            */\n            printf(\"[005] [%d] %s\\n\", $stmt->errno, $stmt->error);\n        }\n    }\n    $stmt->close();\n    $link->close();\n    echo \"done\";\n?>")).toMatchSnapshot();
  });
});
