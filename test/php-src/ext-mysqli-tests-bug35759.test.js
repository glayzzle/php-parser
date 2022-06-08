// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug35759.phpt
  it("Bug #35759 (mysqli_stmt_bind_result() makes huge allocation when column empty)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $col_num= 1000;\n    $mysql = new mysqli($host, $user, $passwd, $db, $port, $socket);\n    $mysql->query(\"DROP TABLE IF EXISTS test\");\n    $create = \"CREATE TABLE test (a0 MEDIUMBLOB NOT NULL DEFAULT ''\";\n    $i= 0;\n    while (++$i < $col_num) {\n        $create .= \", a$i MEDIUMBLOB NOT NULL DEFAULT ''\";\n    }\n    $create .= \") ENGINE=MyISAM\"; // doesn't work with InnoDB, which is default in 5.5\n    if (!$mysql->query($create)) {\n        if (1101 == $mysql->errno) {\n            /* SQL strict mode - [1101] BLOB/TEXT column 'a0' can't have a default value */\n            print \"done!\";\n            exit(0);\n        }\n        printf(\"[001] [%d] %s\\n\", $mysql->errno, $mysql->error);\n    }\n    if (!$mysql->query(\"INSERT INTO test (a0) VALUES ('')\"))\n        printf(\"[002] [%d] %s\\n\", $mysql->errno, $mysql->error);\n    $stmt = $mysql->prepare(\"SELECT * FROM test\");\n    if ($stmt) {\n        $stmt->execute();\n        $stmt->store_result();\n        for ($i = 0; $i < $col_num; $i++) {\n            $params[] = &$col_num;\n        }\n        call_user_func_array(array($stmt, \"bind_result\"), $params);\n        $stmt->fetch();\n        $stmt->close();\n    } else {\n        printf(\"[003] [%d] %s\\n\", $mysql->errno, $mysql->error);\n    }\n    $mysql->close();\n    echo \"done!\";\n?>")).toMatchSnapshot();
  });
});
