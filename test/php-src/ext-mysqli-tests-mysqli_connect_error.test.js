// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_connect_error.phpt
  it("mysqli_connect_error()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $tmp    = NULL;\n    $link   = NULL;\n    // too many parameter\n    try {\n        mysqli_connect_error($link);\n    } catch (ArgumentCountError $exception) {\n        print($exception->getMessage() . \"\\n\");\n    }\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[002] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    if (NULL !== ($tmp = mysqli_connect_error()))\n        printf(\"[003] Expecting NULL, got %s/%s\\n\", gettype($tmp), $tmp);\n    mysqli_close($link);\n    if ($link = @my_mysqli_connect($host, $user . 'unknown_really', $passwd . 'non_empty', $db, $port, $socket))\n        printf(\"[003] Connect to the server should fail using host=%s, user=%s, passwd=***non_empty, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user . 'unknown_really', $db, $port, $socket);\n    if ('' === ($tmp = mysqli_connect_error()))\n        printf(\"[004] Expecting string/'', got %s/%s\\n\", gettype($tmp), $tmp);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
