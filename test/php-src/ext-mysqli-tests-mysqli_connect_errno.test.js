// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_connect_errno.phpt
  it("mysqli_connect_errno()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $tmp    = NULL;\n    $link   = NULL;\n    // too many parameter\n    try {\n        mysqli_connect_errno($link);\n    } catch (ArgumentCountError $exception) {\n        print($exception->getMessage() . \"\\n\");\n    }\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[002] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    if (0 !== ($tmp = mysqli_connect_errno()))\n        printf(\"[003] Expecting integer/0, got %s/%s\\n\", gettype($tmp), $tmp);\n    mysqli_close($link);\n    $link = @my_mysqli_connect($host, $user . 'unknown_really', $passwd . 'non_empty', $db, $port, $socket);\n    if (false !== $link)\n        printf(\"[004] Connect to the server should fail using host=%s, user=%s, passwd=***non_empty, dbname=%s, port=%s, socket=%s, expecting boolean/false, got %s/%s\\n\",\n            $host, $user . 'unknown_really', $db, $port, $socket, gettype($link), var_export($link, true));\n    if (0 === ($tmp = mysqli_connect_errno()))\n        printf(\"[005] Expecting integer/any non-zero, got %s/%s\\n\", gettype($tmp), $tmp);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
