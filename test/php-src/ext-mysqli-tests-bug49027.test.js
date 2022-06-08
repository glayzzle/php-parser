// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug49027.phpt
  it("Bug #49027 (mysqli_options() doesn't work when using mysqlnd)", function () {
    expect(parser.parseCode("<?php\n    include (\"connect.inc\");\n    $link = mysqli_init();\n    if (!mysqli_options($link, MYSQLI_INIT_COMMAND, \"SELECT 1\")) {\n        printf(\"[001] Cannot set INIT_COMMAND\\n\");\n    }\n    if (!my_mysqli_real_connect($link, $host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[002] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    var_dump($link->query(\"SELECT 42\")->fetch_row());\n    if (!mysqli_query($link, \"DROP TABLE IF EXISTS test\") ||\n        !mysqli_query($link, sprintf(\"CREATE TABLE test(id INT) ENGINE=%s\", $engine))) {\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    mysqli_close($link);\n    $link = mysqli_init();\n    if (!mysqli_options($link, MYSQLI_INIT_COMMAND, \"INSERT INTO test(id) VALUES(1)\")) {\n        printf(\"[004] Cannot set INIT_COMMAND\\n\");\n    }\n    if (!my_mysqli_real_connect($link, $host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[005] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    if (!$res = mysqli_query($link, \"SELECT id FROM test\"))\n        printf(\"[006] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    var_dump(mysqli_fetch_assoc($res));\n    mysqli_free_result($res);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
