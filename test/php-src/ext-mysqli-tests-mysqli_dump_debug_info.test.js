// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_dump_debug_info.phpt
  it("mysqli_dump_debug_info()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[003] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n        exit(1);\n    }\n    if (!is_bool($tmp = mysqli_dump_debug_info($link)))\n        printf(\"[004] Expecting boolean/[true|false] value, got %s/%s, [%d] %s\\n\",\n            gettype($tmp), $tmp,\n            mysqli_errno($link), mysqli_error($link));\n    mysqli_close($link);\n    try {\n        mysqli_dump_debug_info($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
