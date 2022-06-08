// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/067.phpt
  it("function test: nested selects (cursors)", function () {
    expect(parser.parseCode("<?php\n    function open_cursor($mysql, $query) {\n        if (!is_object($stmt = $mysql->prepare($query))) {\n            printf(\"[001] Cannot create statement object for '%s', [%d] %s\\n\",\n                    $query, $mysql->errno, $mysql->error);\n        }\n        $stmt->attr_set(MYSQLI_STMT_ATTR_CURSOR_TYPE, MYSQLI_CURSOR_TYPE_READ_ONLY);\n        return $stmt;\n    }\n    require_once(\"connect.inc\");\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    if (mysqli_get_server_version($mysql) < 50009) {\n        /* we really want to skip it... */\n        die(var_dump(63));\n    }\n    $a = array();\n    for ($i=0;$i < 3; $i++) {\n        $mysql->query(\"DROP TABLE IF EXISTS cursor$i\");\n        $mysql->query(\"CREATE TABLE cursor$i (a int not null) ENGINE=\" . $engine);\n        $mysql->query(\"INSERT INTO cursor$i VALUES (1),(2),(3),(4),(5),(6)\");\n        $stmt[$i] = open_cursor($mysql, \"SELECT a FROM cursor$i\");\n        $stmt[$i]->execute();\n        $stmt[$i]->bind_result($a[$i]);\n    }\n    $cnt = 0;\n    while ($stmt[0]->fetch()) {\n        $stmt[1]->fetch();\n        $stmt[2]->fetch();\n        $cnt += $a[0] + $a[1] + $a[2];\n    }\n    for ($i=0; $i < 3; $i++) {\n        $stmt[$i]->close();\n    }\n    $mysql->close();\n    var_dump($cnt);\n?>")).toMatchSnapshot();
  });
});
