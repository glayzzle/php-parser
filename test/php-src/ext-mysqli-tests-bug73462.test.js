// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug73462.phpt
  it("Bug #73462 (Persistent connections don't set $connect_errno)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /* Initial persistent connection */\n    $mysql_1 = new mysqli('p:'.$host, $user, $passwd, $db);\n    $result = $mysql_1->query(\"SHOW STATUS LIKE 'Connections'\");\n    $c1 = $result->fetch_row();\n    $result->free();\n    $mysql_1->close();\n    /* Failed connection to invalid host */\n    $mysql_2 = @new mysqli(' !!! invalid !!! ', $user, $passwd, $db);\n    try {\n        $mysql_2->close();\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    /* Re-use persistent connection */\n    $mysql_3 = new mysqli('p:'.$host, $user, $passwd, $db);\n    $error = mysqli_connect_errno();\n    $result = $mysql_3->query(\"SHOW STATUS LIKE 'Connections'\");\n    $c3 = $result->fetch_row();\n    $result->free();\n    $mysql_3->close();\n    if (end($c1) !== end($c3))\n        printf(\"[001] Expected '%d' got '%d'.\\n\", end($c1), end($c3));\n    if ($error !== 0)\n        printf(\"[002] Expected '0' got '%d'.\\n\", $error);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
