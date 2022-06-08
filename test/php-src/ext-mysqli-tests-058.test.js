// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/058.phpt
  it("multiple binds", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link,\"DROP TABLE IF EXISTS mbind\");\n    mysqli_query($link,\"CREATE TABLE mbind (a int, b varchar(10))\");\n    $stmt = mysqli_prepare($link, \"INSERT INTO mbind VALUES (?,?)\");\n    mysqli_stmt_bind_param($stmt, \"is\", $a, $b);\n    $a = 1;\n    $b = \"foo\";\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_bind_param($stmt, \"is\", $c, $d);\n    $c = 2;\n    $d = \"bar\";\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_close($stmt);\n    $stmt = mysqli_prepare($link, \"SELECT * FROM mbind\");\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_bind_result($stmt, $e, $f);\n    mysqli_stmt_fetch($stmt);\n    mysqli_stmt_bind_result($stmt, $g, $h);\n    mysqli_stmt_fetch($stmt);\n    var_dump((array($e,$f,$g,$h)));\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
