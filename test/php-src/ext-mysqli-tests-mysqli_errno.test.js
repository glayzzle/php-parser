// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_errno.phpt
  it("mysqli_errno()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[003] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n}\n    var_dump(mysqli_errno($link));\n    if (!mysqli_query($link, 'DROP TABLE IF EXISTS test')) {\n        printf(\"[004] Failed to drop old test table: [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    mysqli_query($link, 'SELECT * FROM test');\n    var_dump(mysqli_errno($link));\n    @mysqli_query($link, 'No SQL');\n    if (($tmp = mysqli_errno($link)) == 0)\n        printf(\"[005] Expecting int/any non zero got %s/%s\\n\", gettype($tmp), $tmp);\n    mysqli_close($link);\n    try {\n        mysqli_errno($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
