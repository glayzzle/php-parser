// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_fetch_field_direct_oo.phpt
  it("$res->fetch_field_direct(s)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysqli = new mysqli();\n    try {\n        new mysqli_result($mysqli);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    require('table.inc');\n    if (!$mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[002] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    if (!$res = $mysqli->query(\"SELECT id AS ID, label FROM test AS TEST ORDER BY id LIMIT 1\")) {\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    try {\n        var_dump($res->fetch_field_direct(-1));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    var_dump($res->fetch_field_direct(0));\n    try {\n        var_dump($res->fetch_field_direct(2));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    $res->free_result();\n    try {\n        $res->fetch_field_direct(0);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    $mysqli->close();\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
