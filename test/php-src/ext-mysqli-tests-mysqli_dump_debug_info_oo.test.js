// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_dump_debug_info_oo.phpt
  it("mysqli_dump_debug_info()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $tmp\t= NULL;\n    $link\t= NULL;\n    if (!$mysqli = new mysqli($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\", $host, $user, $db, $port, $socket);\n    if (!is_bool($tmp = $mysqli->dump_debug_info()))\n        printf(\"[003] Expecting boolean/[true|false] value, got %s/%s, [%d] %s\\n\",\n            gettype($tmp), $tmp,\n            $mysqli->errno, $mysqli->error);\n    $mysqli->close();\n    try {\n        $mysqli->dump_debug_info();\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
