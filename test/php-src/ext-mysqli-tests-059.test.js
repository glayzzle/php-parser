// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/059.phpt
  it("sqlmode + bind", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link, \"SET SQL_MODE='PIPES_AS_CONCAT'\");\n    mysqli_query($link,\"DROP TABLE IF EXISTS mbind\");\n    mysqli_query($link,\"CREATE TABLE mbind (b varchar(25))\");\n    $stmt = mysqli_prepare($link, \"INSERT INTO mbind VALUES (?||?)\");\n    mysqli_stmt_bind_param($stmt, \"ss\", $a, $b);\n    $a = \"foo\";\n    $b = \"bar\";\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_close($stmt);\n    $stmt = mysqli_prepare($link, \"SELECT * FROM mbind\");\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_bind_result($stmt, $e);\n    mysqli_stmt_fetch($stmt);\n    var_dump($e);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
