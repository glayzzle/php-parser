// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_error_oo.phpt
  it("$mysqli->error", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $tmp    = NULL;\n    $link   = NULL;\n    $mysqli = new mysqli();\n    if ('' !== ($tmp = @$mysqli->error))\n        printf(\"[001] Expecting empty string, got %s/'%s'\\n\", gettype($tmp), $tmp);\n    if (!$mysqli = new mysqli($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[002] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    $tmp = $mysqli->error;\n    if (!is_string($tmp) || ('' !== $tmp))\n        printf(\"[003] Expecting string/empty, got %s/%s. [%d] %s\\n\", gettype($tmp), $tmp, $mysqli->errno, $mysqli->error);\n    if (!$mysqli->query('DROP TABLE IF EXISTS test')) {\n        printf(\"[004] Failed to drop old test table: [%d] %s\\n\", $mysqli->errno, $mysqli->error);\n    }\n    $mysqli->query('SELECT * FROM test');\n    $tmp = $mysqli->error;\n    if (!is_string($tmp) || !preg_match(\"/Table '\\w*\\.test' doesn't exist/su\", $tmp))\n        printf(\"[006] Expecting string/[Table... doesn't exit], got %s/%s. [%d] %s\\n\", gettype($tmp), $tmp, $mysqli->errno, $mysqli->error);\n    $mysqli->close();\n    try {\n        $mysqli->error;\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
