// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/021.phpt
  it("mysqli bind_param+bind_result char/text", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link,\"DROP TABLE IF EXISTS test_bind_fetch\");\n    mysqli_query($link,\"CREATE TABLE test_bind_fetch(c1 char(10), c2 text)\");\n    $stmt = mysqli_prepare($link, \"INSERT INTO test_bind_fetch VALUES (?,?)\");\n    mysqli_stmt_bind_param($stmt, \"ss\", $q1, $q2);\n    $q1 = \"1234567890\";\n    $q2 = \"this is a test\";\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_close($stmt);\n    $stmt = mysqli_prepare($link, \"SELECT * FROM test_bind_fetch\");\n    mysqli_stmt_bind_result($stmt, $c1, $c2);\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_fetch($stmt);\n    $test = array($c1,$c2);\n    var_dump($test);\n    mysqli_stmt_close($stmt);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_bind_fetch\");\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
