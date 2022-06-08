// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_fetch_lengths.phpt
  it("mysqli_fetch_lengths()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$mysqli = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    }\n    require('table.inc');\n    if (!$res = mysqli_query($link, \"SELECT id, label FROM test ORDER BY id LIMIT 1\")) {\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    var_dump(mysqli_fetch_lengths($res));\n    while ($row = mysqli_fetch_assoc($res))\n        var_dump(mysqli_fetch_lengths($res));\n    var_dump(mysqli_fetch_lengths($res));\n    mysqli_free_result($res);\n    try {\n        mysqli_fetch_lengths($res);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
