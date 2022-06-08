// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug45289.phpt
  it("Bug #45289 (Bogus store_result on PS)", function () {
    expect(parser.parseCode("<?php\n    require('table.inc');\n    $link->close();\n    $link = mysqli_init();\n    if (!($link->real_connect($host, $user, $passwd, $db, $port, $socket)))\n        printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    $id = 1;\n    if (!($stmt = $link->prepare('SELECT id, label FROM test WHERE id=? LIMIT 1')))\n        printf(\"[002] [%d] %s\\n\", $link->errno, $link->error);\n    if (!$stmt->bind_param('i', $id) || !$stmt->execute())\n        printf(\"[003] [%d] %s\\n\", $stmt->errno, $stmt->error);\n    if ($res = $link->store_result()) {\n        if ($IS_MYSQLND)\n            printf(\"[004] Can store result!\\n\");\n        else\n            printf(\"[004] [007] http://bugs.mysql.com/bug.php?id=47485\\n\");\n    } else {\n        printf(\"[004] [%d] %s\\n\", $link->errno, $link->error);\n    }\n?>")).toMatchSnapshot();
  });
});
