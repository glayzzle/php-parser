// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_fetch_assoc_oo.phpt
  it("mysqli_fetch_assoc()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $tmp    = NULL;\n    $link   = NULL;\n    // Note: no SQL type tests, internally the same function gets used as for mysqli_fetch_array() which does a lot of SQL type test\n    $mysqli = new mysqli();\n    try {\n        new mysqli_result($mysqli);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    require('table.inc');\n    if (!$mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[002] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    if (!$res = $mysqli->query(\"SELECT id, label FROM test ORDER BY id LIMIT 1\")) {\n        printf(\"[004] [%d] %s\\n\", $mysqli->errno, $mysqli->error);\n    }\n    print \"[005]\\n\";\n    var_dump($res->fetch_assoc());\n    print \"[006]\\n\";\n    var_dump($res->fetch_assoc());\n    $res->free_result();\n    if (!$res = $mysqli->query(\"SELECT 1 AS a, 2 AS a, 3 AS c, 4 AS C, NULL AS d, true AS e\")) {\n        printf(\"[007] Cannot run query, [%d] %s\\n\", $mysqli->errno, $mysqli->error);\n    }\n    print \"[008]\\n\";\n    var_dump($res->fetch_assoc());\n    $res->free_result();\n    try {\n        $res->fetch_assoc();\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
