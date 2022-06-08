// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_close_oo.phpt
  it("mysqli_close()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $tmp    = NULL;\n    $link   = NULL;\n    if (!$mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    $tmp = $mysqli->close();\n    if (true !== $tmp)\n        printf(\"[003] Expecting boolean/true, got %s/%s\\n\", gettype($tmp), $tmp);\n    try {\n        $mysqli->close();\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    try {\n        $mysqli->query(\"SELECT 1\");\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
