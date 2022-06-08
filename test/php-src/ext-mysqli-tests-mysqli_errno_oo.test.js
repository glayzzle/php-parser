// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_errno_oo.phpt
  it("$mysqli->errno", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $tmp    = NULL;\n    $link   = NULL;\n    $mysqli = new mysqli();\n    if (0 !== ($tmp = @$mysqli->errno))\n        printf(\"[001] Expecting int/0, got %s/%s\\n\", gettype($tmp), $tmp);\n    if (!$mysqli = new mysqli($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[002] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    var_dump($mysqli->errno);\n    if (!$mysqli->query('DROP TABLE IF EXISTS test')) {\n        printf(\"[003] Failed to drop old test table: [%d] %s\\n\", $mysqli->errno, $mysqli->error);\n    }\n    $mysqli->query('SELECT * FROM test');\n    var_dump($mysqli->errno);\n    @$mysqli->query('No SQL');\n    if (($tmp = $mysqli->errno) === 0)\n        printf(\"[004] Expecting int/any non zero got %s/%s\\n\", gettype($tmp), $tmp);\n    $mysqli->close();\n    try {\n        $mysqli->errno;\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
