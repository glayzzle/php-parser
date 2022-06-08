// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/025.phpt
  it("mysqli bind_param/bind_result tinyint values", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link, \"SET sql_mode=''\");\n    mysqli_query($link,\"DROP TABLE IF EXISTS test_bind_fetch\");\n    mysqli_query($link,\"CREATE TABLE test_bind_fetch(c1 tinyint,\n        c2 tinyint unsigned,\n        c3 tinyint not NULL,\n        c4 tinyint,\n        c5 tinyint,\n        c6 tinyint unsigned,\n        c7 tinyint)\");\n    $stmt = mysqli_prepare ($link, \"INSERT INTO test_bind_fetch VALUES(?,?,?,?,?,?,?)\");\n    mysqli_stmt_bind_param($stmt, \"iiiiiii\", $c1,$c2,$c3,$c4,$c5,$c6,$c7);\n    $c1 = -23;\n    $c2 = 300;\n    $c3 = 0;\n    $c4 = -100;\n    $c5 = -127;\n    $c6 = 30;\n    $c7 = 0;\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_close($stmt);\n    mysqli_query($link, \"INSERT INTO test_bind_fetch VALUES (-23,300,0,-100,-127,+30,0)\");\n    $c1 = $c2 = $c3 = $c4 = $c5 = $c6 = $c7 = NULL;\n    $stmt = mysqli_prepare($link, \"SELECT * FROM test_bind_fetch\");\n    mysqli_stmt_bind_result($stmt, $c1, $c2, $c3, $c4, $c5, $c6, $c7);\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_fetch($stmt);\n    $test = array($c1,$c2,$c3,$c4,$c5,$c6,$c7);\n    var_dump($test);\n    mysqli_stmt_close($stmt);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_bind_fetch\");\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
