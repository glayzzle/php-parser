// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/024.phpt
  it("mysqli bind_param/bind_result short values", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link, \"SET sql_mode=''\");\n    mysqli_query($link,\"DROP TABLE IF EXISTS test_bind_fetch\");\n    mysqli_query($link,\"CREATE TABLE test_bind_fetch(c1 smallint unsigned,\n        c2 smallint unsigned,\n        c3 smallint,\n        c4 smallint,\n        c5 smallint,\n        c6 smallint unsigned,\n        c7 smallint)\");\n    $stmt = mysqli_prepare($link, \"INSERT INTO test_bind_fetch VALUES (?,?,?,?,?,?,?)\");\n    mysqli_stmt_bind_param($stmt, \"iiiiiii\", $c1,$c2,$c3,$c4,$c5,$c6,$c7);\n    $c1 = -23;\n    $c2 = 35999;\n    $c3 = NULL;\n    $c4 = -500;\n    $c5 = -9999999;\n    $c6 = -0;\n    $c7 = 0;\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_close($stmt);\n    $stmt = mysqli_prepare($link, \"SELECT * FROM test_bind_fetch\");\n    mysqli_stmt_bind_result($stmt, $c1, $c2, $c3, $c4, $c5, $c6, $c7);\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_fetch($stmt);\n    $test = array($c1,$c2,$c3,$c4,$c5,$c6,$c7);\n    var_dump($test);\n    mysqli_stmt_close($stmt);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_bind_fetch\");\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
