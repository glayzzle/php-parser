// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/005.phpt
  it("mysqli fetch char/text long", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    if (!mysqli_query($link, \"DROP TABLE IF EXISTS test_bind_fetch\"))\n        printf(\"[001] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (!mysqli_query($link, \"CREATE TABLE test_bind_fetch(c1 char(10), c2 text) ENGINE=\" . $engine))\n        printf(\"[002] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    $a = str_repeat(\"A1\", 32000);\n    mysqli_query($link, \"INSERT INTO test_bind_fetch VALUES ('1234567890', '$a')\");\n    $stmt = mysqli_prepare($link, \"SELECT * FROM test_bind_fetch\");\n    mysqli_stmt_bind_result($stmt, $c1, $c2);\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_fetch($stmt);\n    $test[] = $c1;\n    $test[] = ($a == $c2) ? \"32K String ok\" : \"32K String failed\";\n    var_dump($test);\n    /* this will crash with libmysql from PHP 5.0.6 (or earlier) to 5.3.0 */\n    mysqli_stmt_fetch($stmt);\n    mysqli_stmt_close($stmt);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_bind_fetch\");\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
