// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_error.phpt
  it("mysqli_error()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[003] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    }\n    $tmp = mysqli_error($link);\n    if (!is_string($tmp) || ('' !== $tmp))\n        printf(\"[004] Expecting string/empty, got %s/%s. [%d] %s\\n\", gettype($tmp), $tmp, mysqli_errno($link), mysqli_error($link));\n    if (!mysqli_query($link, 'DROP TABLE IF EXISTS test')) {\n        printf(\"[005] Failed to drop old test table: [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    mysqli_query($link, 'SELECT * FROM test');\n    $tmp = mysqli_error($link);\n    if (!is_string($tmp) || !preg_match(\"/Table '\\w*\\.test' doesn't exist/su\", $tmp))\n        printf(\"[006] Expecting string/[Table... doesn't exit], got %s/%s. [%d] %s\\n\", gettype($tmp), $tmp, mysqli_errno($link), mysqli_error($link));\n    mysqli_close($link);\n    try {\n        mysqli_error($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
