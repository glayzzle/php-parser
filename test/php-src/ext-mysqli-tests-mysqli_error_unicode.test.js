// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_error_unicode.phpt
  it("mysqli_error()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$link = mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[003] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    }\n    mysqli_query($link, \"set names utf8\");\n    $tmp = mysqli_error($link);\n    if (!is_string($tmp) || ('' !== $tmp))\n        printf(\"[004] Expecting string/empty, got %s/%s. [%d] %s\\n\", gettype($tmp), $tmp, mysqli_errno($link), mysqli_error($link));\n    mysqli_query($link, 'SELECT * FROM няма_такава_таблица');\n    $tmp = mysqli_error($link);\n    var_dump(str_replace($db.\".\", \"\", $tmp));\n    mysqli_close($link);\n    try {\n        mysqli_error($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
