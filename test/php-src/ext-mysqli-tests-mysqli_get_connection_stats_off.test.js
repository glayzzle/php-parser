// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_get_connection_stats_off.phpt
  it("mysqli_get_connection_stats() - disable via php.ini", function () {
    expect(parser.parseCode("<?php\n    // connect and table inc connect to mysql and create tables\n    require_once('connect.inc');\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    }\n    $before = mysqli_get_connection_stats($link);\n    if (!is_array($before) || empty($before)) {\n        printf(\"[002] Expecting non-empty array, got %s.\\n\", gettype($before));\n        var_dump($before);\n    }\n    mysqli_close($link);\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[003] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    }\n    $after = mysqli_get_connection_stats($link);\n    if ($before !== $after) {\n        printf(\"[004] Statistics differ!\");\n        var_dump($before);\n        var_dump($after);\n    }\n    foreach ($after as $k => $v)\n        if ($v != 0) {\n            printf(\"[004] Field %s should not have any other value but 0, got %s.\\n\",\n                $k, $v);\n        }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
